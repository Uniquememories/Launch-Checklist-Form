// Write your JavaScript code here!
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
*/

   window.addEventListener("load", function() {
      this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json) {
            const div = document.getElementById("missionTarget");
               div.innerHTML += `
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[3]["name"]}</li>
                  <li>Diameter: ${json[3]["diameter"]}</li>
                  <li>Star: ${json[3]["star"]}</li>
                  <li>Distance from Earth: ${json[3]["distance"]}</li>
                  <li>Number of Moons: ${json[3]["moons"]}</li>
               </ol>
               <img src="${json[3]["image"]}">
               `
         });
      });
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         event.preventDefault();
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let fuelValue = fuelLevel.value;
         let cargoMass = document.querySelector("input[name=cargoMass]");
         let cargoValue = cargoMass.value;
         if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
         } else if(!isNaN(pilotName.value) || !isNaN(copilotName.value) || !Number(fuelLevel.value) || !Number(cargoMass.value)) {
         alert("Make sure to enter valid information for each field");
         } else {
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch!`
            copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch!`
            faultyItems.style.visibility = "visible";
            if(fuelValue < 10000 && cargoValue > 10000) {
               fuelStatus.innerHTML = `Fuel Level ${fuelValue} is too low for launch!`;
               launchStatus.innerHTML = `Shuttle Not Ready for Launch!`;
               launchStatus.style.color = "red";
               cargoStatus.innerHTML = `${cargoValue} kg cargo mass weighs too much for takeoff!`
            } else if (fuelValue < 10000) {
               fuelStatus.innerHTML = `Fuel Level ${fuelValue} is too low for launch!`;
               launchStatus.innerHTML = `Shuttle Not Ready for Launch!`;
               launchStatus.style.color = "red";
               cargoStatus.innerHTML = `Cargo mass low enough for launch.`
            } else if (cargoValue > 10000) {
               launchStatus.innerHTML = `Shuttle not ready for launch!`;
               launchStatus.style.color = "red";
               cargoStatus.innerHTML = `${cargoValue} kg cargo mass weighs too much for takeoff!`;
               fuelStatus.innerHTML = `Fuel level high enough for launch.`;
            } else {
               launchStatus.innerHTML = `Shuttle is ready for launch.`;
               launchStatus.style.color = "green";
               fuelStatus.innerHTML = `Fuel level high enough for launch.`;
               cargoStatus.innerHTML = `Cargo mass low enough for launch.`
            };
         };
      });
 });
