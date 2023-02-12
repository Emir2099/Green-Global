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
    const emission = hoursUsed * applianceWattage[selectedAppliance];
    document.getElementById("emission-output").innerHTML = `Your daily emission is approximately ${emission} kg of CO2`;
  }
  