---
layout: default
title: Back exercises
nav_order: 13
---
{% raw %}
<div id="exercise-list">
  <label>
    <input type="checkbox" id="exercise-back-stretch">
    Back Stretch
  </label><br>
  <label>
    <input type="checkbox" id="exercise-back-strengthen">
    Back Strengthen
  </label><br>
  <label>
    <input type="checkbox" id="exercise-deadlift">
    Deadlift
  </label>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('#exercise-list input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
      const id = checkbox.id;
      // Load from localStorage
      const saved = localStorage.getItem(id);
      if (saved !== null) {
        checkbox.checked = JSON.parse(saved); // Converts string to boolean
      }

      // Save to localStorage on change
      checkbox.addEventListener("change", function () {
        localStorage.setItem(id, checkbox.checked);
      });
    });
  });
</script>

{% endraw %}
