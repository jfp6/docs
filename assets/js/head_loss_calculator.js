const commonFittings = {
    "Elbow 90° (standard)": 0.9,
    "Elbow 45°": 0.4,
    "Globe Valve (fully open)": 10,
    "Gate Valve (fully open)": 0.2,
    "Sudden Expansion": 1.0,
    "Sudden Contraction": 0.5,
    "Tee (through flow)": 0.6,
    "Tee (branch flow)": 1.8,
    "Custom": 0.0
  };
  
  function addFitting() {
    const container = document.getElementById('fittings');
    const div = document.createElement('div');
    div.className = 'fitting-group';
  
    const select = document.createElement('select');
    for (const name in commonFittings) {
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      select.appendChild(option);
    }
  
    const input = document.createElement('input');
    input.type = 'number';
    input.step = 'any';
    input.placeholder = 'Custom K (optional)';
    input.style.marginLeft = '10px';
  
    select.onchange = () => {
      const selected = select.value;
      input.value = commonFittings[selected];
      if (selected === 'Custom') input.value = '';
    };
  
    div.appendChild(select);
    div.appendChild(input);
    container.appendChild(div);
  }
  
  function calculate() {
    const L = parseFloat(document.getElementById('length').value);
    const D = parseFloat(document.getElementById('diameter').value);
    const v = parseFloat(document.getElementById('velocity').value);
    const eps = parseFloat(document.getElementById('roughness').value);
    const nu = parseFloat(document.getElementById('kinematicViscosity').value);
    const g = 9.81;
  
    if ([L, D, v, eps, nu].some(isNaN)) {
      document.getElementById('result').innerText = "Please enter all main inputs.";
      return;
    }
  
    let K_total = 0;
    const fittings = document.querySelectorAll('.fitting-group');
    fittings.forEach(group => {
      const input = group.querySelector('input');
      const K = parseFloat(input.value);
      if (!isNaN(K)) K_total += K;
    });
  
    const Re = (v * D) / nu;
  
    let f = 0.02, fOld, iteration = 0;
    do {
      fOld = f;
      const term1 = eps / D / 3.7;
      const term2 = 2.51 / (Re * Math.sqrt(f));
      f = 1 / Math.pow(-2 * Math.log10(term1 + term2), 2);
      iteration++;
    } while (Math.abs(f - fOld) > 1e-6 && iteration < 100);
  
    const hf = f * (L / D) * (v ** 2) / (2 * g);
    const hm = K_total * (v ** 2) / (2 * g);
    const hTotal = hf + hm;
  
    document.getElementById('result').innerHTML = `
      <p>Reynolds Number: <strong>${Re.toFixed(0)}</strong></p>
      <p>Friction Factor (f): <strong>${f.toFixed(6)}</strong></p>
      <p>Major Head Loss: <strong>${hf.toFixed(4)} m</strong></p>
      <p>Minor Head Loss: <strong>${hm.toFixed(4)} m</strong></p>
      <p><strong>Total Head Loss: ${hTotal.toFixed(4)} m</strong></p>
    `;
  
    drawChart(hf, hm, hTotal);
  }
  
  function drawChart(hf, hm, hTotal) {
    const ctx = document.getElementById('lossChart').getContext('2d');
    if (window.lossChart) window.lossChart.destroy();
    window.lossChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Major Loss', 'Minor Loss', 'Total Loss'],
        datasets: [{
          label: 'Head Loss (m)',
          data: [hf, hm, hTotal],
          backgroundColor: ['#4caf50', '#f57c00', '#2196f3']
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Meters of Head Loss'
            }
          }
        }
      }
    });
  }
  
  window.onload = () => addFitting();
  