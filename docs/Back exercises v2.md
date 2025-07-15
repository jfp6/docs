---
layout: default
title: Back exercises 2
nav_order: 20
---

<h2>Day 1</h2>
<div id="exercise-list-day1"></div>
<button id="reset-exercises-day1">Submit Day 1</button>
<button id="clear-history-day1">Clear History Day 1</button>
<canvas id="chart-day1" width="400" height="200"></canvas>
<div id="history-day1"></div>

<hr>

<h2>Day 2</h2>
<div id="exercise-list-day2"></div>
<button id="reset-exercises-day2">Submit Day 2</button>
<button id="clear-history-day2">Clear History Day 2</button>
<canvas id="chart-day2" width="400" height="200"></canvas>
<div id="history-day2"></div>

<hr>

<h2>Combined Completion Chart</h2>
<canvas id="chart-overview" width="600" height="300"></canvas>

<div id="edit-modal" class="modal">
  <div class="modal-content">
    <span class="close-button">&times;</span>
    <h3>Edit/Add History Entry</h3>
    <label for="modal-date">Date:</label>
    <input type="date" id="modal-date" required><br><br>
    <label>Completed Exercises:</label>
    <div id="modal-exercise-list"></div>
    <br>
    <button id="modal-save">Save</button>
    <button id="modal-delete">Delete</button>
  </div>
</div>

<style>
  .modal { display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.5); }
  .modal-content { background-color: #fefefe; margin: 10% auto; padding: 20px; border: 1px solid #888; width: 90%; max-width: 500px; border-radius: 8px; }
  .close-button { color: #aaa; float: right; font-size: 28px; font-weight: bold; }
  .close-button:hover, .close-button:focus { color: black; text-decoration: none; cursor: pointer; }
  #modal-exercise-list label { display: block; margin-top: 5px; }
</style>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

{% include exercise-tracker.html %}
