import { dataArrayThatReturnedFromTheStorage } from "./storage.js";

let arrayOfDataFromTheStorage;
const run = () => {
  document
    .getElementById("search-button")
    .addEventListener("click", async () => {
      arrayOfDataFromTheStorage = await dataArrayThatReturnedFromTheStorage();
      buildThePage();
    });
};

let dataToBeImportedToTheScreen = [
  document.getElementById("name"),
  document.getElementById("temp"),
  document.getElementById("feels_like"),
  document.getElementById("temp_min"),
  document.getElementById("temp_max"),
  document.getElementById("description"),
  document.getElementById("speed"),
  document.getElementById("humidity"),
  document.getElementById("sunrise"),
  document.getElementById("sunset"),
];
function buildThePageBasedOnSavedData() {
  document.getElementById("flag").style.display = "flex";
  document.getElementById("flag").src = JSON.parse(
    localStorage.getItem("data")
  )[0];
  let j = 1;
  for (let i = 0; i < dataToBeImportedToTheScreen.length; i++) {
    dataToBeImportedToTheScreen[i].innerHTML = JSON.parse(
      localStorage.getItem("data")
    )[j];
    j++;
  }
}
function buildThePage() {
  if (arrayOfDataFromTheStorage) {
    document.getElementById("flag").src = arrayOfDataFromTheStorage[0];
    document.getElementById("flag").style.display = "flex";
  }
  let j = 1;
  document.getElementById("weather-info").style.display = "flex";
  for (let i = 0; i < dataToBeImportedToTheScreen.length; i++) {
    dataToBeImportedToTheScreen[i].innerHTML = arrayOfDataFromTheStorage[j];
    j++;
  }
}
export { run, buildThePage, buildThePageBasedOnSavedData };
