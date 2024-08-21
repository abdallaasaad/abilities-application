import { run, buildThePageBasedOnSavedData } from "./DomBuilder.js";

if (JSON.parse(localStorage.getItem("data"))) {
  document.getElementById("weather-info").style.display = "flex";
  document.getElementById("city-input").value = "";
  buildThePageBasedOnSavedData();
}
run();
