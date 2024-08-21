import { completeFunc } from "./doneJobs.js";
import { importDataFromLocalStorage } from "./exportDataFromLocalStorageToScreen.js";
import {
  dataArrayToBeImportedFromLocalStorageToToDoListSection,
  dataToBeImportedToDoneJobsSection,
  saveData,
} from "./importInputToLocalStorage.js";

// if (
//   dataToBeImportedToDoneJobsSection.length >= 1 ||
//   dataArrayToBeImportedFromLocalStorageToToDoListSection.length >= 1
// ) {
//   importDataFromLocalStorage();
// }

const btn = document.getElementById("addTaskButton");
btn.addEventListener("click", () => {
  if (saveData()) {
    importDataFromLocalStorage();
  }
});

// Initial load of tasks
importDataFromLocalStorage();
completeFunc();
