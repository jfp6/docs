---
layout: default
title: Energy Comparisons 
nav_order: 50
---

# Energy Comparisons

<h4>Energy Needs</h4>

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Value</th>
      <th>Unit</th>
    </tr>
   </thead>
   <tbody>
     <tr>
       <td>House Area:</td>
       <td><input type="number" id="area" name="area" placeholder="0" /></td>
       <td>sq ft</td>
     </tr>
     <tr>
       <td>Energy per Month:</td>
       <td><input type="number" id="power" disabled /></td>
       <td>kWh</td>
     </tr>
  </tbody>
</table>

<button onclick="calculateEnergyUsage_Month();">Calculate</button>
    