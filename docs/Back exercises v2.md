---
layout: default
title: Back exercises
nav_order: 13
---

<h2>Day 1</h2>
<div id="exercise-list-day1"></div>
<button id="reset-exercises-day1">Reset Day 1</button>
<button id="clear-history-day1">Clear History Day 1</button>
<canvas id="chart-day1" width="400" height="200"></canvas>
<div id="history-day1"></div>

<hr>

<h2>Day 2</h2>
<div id="exercise-list-day2"></div>
<button id="reset-exercises-day2">Reset Day 2</button>
<button id="clear-history-day2">Clear History Day 2</button>
<canvas id="chart-day2" width="400" height="200"></canvas>
<div id="history-day2"></div>

<hr>

<h2>Combined Completion Chart</h2>
<canvas id="chart-overview" width="600" height="300"></canvas>

<!-- Chart.js CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Your dynamic exercise script -->
{% include exercise-tracker.js %}
