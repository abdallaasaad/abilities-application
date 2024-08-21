// import { saveData } from "./importInputToLocalStorage.js";
import {
  dataArrayToBeImportedFromLocalStorageToToDoListSection,
  deleteTheData,
} from "./importInputToLocalStorage.js";

let dataToReplaceTheExistedInTheLocalStorage;

export const deleteFunc = (id, taskToDelteFromLocalStorage, arrayName) => {
  console.log("Delete Function");
  //   console.log(JSON.parse(localStorage.getItem("jobs")));

  //   let dataToReplaceTheExistedInTheLocalStorage = JSON.parse(
  //     localStorage.getItem("jobs")
  //   );

  if (arrayName == "jobs") {
    document.getElementById(id).remove();
    dataToReplaceTheExistedInTheLocalStorage = JSON.parse(
      localStorage.getItem("jobs")
    );
    console.log(dataToReplaceTheExistedInTheLocalStorage);

    console.log(taskToDelteFromLocalStorage);
    console.log(typeof taskToDelteFromLocalStorage);

    // dataToReplaceTheExistedInTheLocalStorage.filter(
    //   (element) => element == `${taskToDelteFromLocalStorage}`
    // );
    let index = dataToReplaceTheExistedInTheLocalStorage.indexOf(
      taskToDelteFromLocalStorage
    );
    dataToReplaceTheExistedInTheLocalStorage.splice(index, 1);
    console.log(dataToReplaceTheExistedInTheLocalStorage);

    deleteTheData(dataToReplaceTheExistedInTheLocalStorage, "jobs");
  } else {
    document.getElementById(id).remove();
    dataToReplaceTheExistedInTheLocalStorage = JSON.parse(
      localStorage.getItem("done")
    );
    let index = dataToReplaceTheExistedInTheLocalStorage.indexOf(
      taskToDelteFromLocalStorage
    );
    dataToReplaceTheExistedInTheLocalStorage.splice(index, 1);
    // console.log(dataToReplaceTheExistedInTheLocalStorage);
    deleteTheData(dataToReplaceTheExistedInTheLocalStorage, "");
  } //   console.log(JSON.parse(localStorage.getItem("jobs")));
  //   console.log(dataToReplaceTheExistedInTheLocalStorage);
};
