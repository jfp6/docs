---
layout: default
title: Back exercises
nav_order: 13
---

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
    const exerciseIds = [
      "exercise-back-stretch",
      "exercise-back-strengthen",
      "exercise-deadlift"
    ];

    exerciseIds.forEach(id => {
      const checkbox = document.getElementById(id);

      // Load saved state
      const saved = localStorage.getItem(id);
      if (saved === "true") {
        checkbox.checked = true;
      }

      // Save on change
      checkbox.addEventListener("change", function () {
        localStorage.setItem(id, checkbox.checked);
      });
    });
  });
</script>
