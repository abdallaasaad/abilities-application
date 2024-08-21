import { deleteFunc } from "./deletingJobs.js";
import { completeFunc } from "./doneJobs.js";

const job = document.getElementById("taskInput");
// const clickedOrNot = document.getElementById("done")
export let dataArrayToBeImportedFromLocalStorageToToDoListSection = [];
export let dataToBeImportedToDoneJobsSection = [];
export const saveData = () => {
  if (job.value) {
    dataArrayToBeImportedFromLocalStorageToToDoListSection =
      JSON.parse(localStorage.getItem("jobs")) || [];
    dataArrayToBeImportedFromLocalStorageToToDoListSection.push(job.value);
    localStorage.setItem(
      "jobs",
      JSON.stringify(dataArrayToBeImportedFromLocalStorageToToDoListSection)
    );
    job.value = "";
    return dataArrayToBeImportedFromLocalStorageToToDoListSection;
  } else {
    alert("Must Enter a JOB!");
    return null;
  }
};
export const deleteTheData = (dataToReplace, arrayNameToRemove) => {
  if (arrayNameToRemove == "jobs") {
    localStorage.setItem("jobs", JSON.stringify(dataToReplace));
    //   console.log(JSON.parse(localStorage.getItem("jobs")));
  } else {
    localStorage.setItem("done", JSON.stringify(dataToReplace));
  }
};
export const saveDoneJobs = (id, task) => {
  dataToBeImportedToDoneJobsSection.push(task);
  localStorage.setItem(
    "done",
    JSON.stringify(dataToBeImportedToDoneJobsSection)
  );
  deleteFunc(id, task, "jobs");
  completeFunc(id, task);
  //   document.getElementById(id).remove();
};
