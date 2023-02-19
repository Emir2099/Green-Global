const applianceWattage = {
    television: 0.088,
    laptop: 0.023,
    "desktop-computer": 0.070,
    smartphone: 0.025
  };
  
  function calculateEmission() {
    const applianceSelect = document.getElementById("appliance-select");
    const selectedAppliance = applianceSelect.options[applianceSelect.selectedIndex].value;
    const hoursUsed = document.getElementById("hours-used").value;
    const emission = (hoursUsed * applianceWattage[selectedAppliance])/0.45359237;
    document.getElementById("emission-output").innerHTML = 
    `Total emissions: ${emission.toFixed(2)} pounds of CO2`;
  }
  