// import { deleteFunc } from "./deletingJobs.js";
// import { dataArray } from "./importInputToLocalStorage.js";

export const completeFunc = (id, task) => {
  //   jobsHaveBeenDone.push(task);
  //   localStorage.setItem("done", JSON.stringify(jobsHaveBeenDone));
  let jobsHaveBeenDone = JSON.parse(localStorage.getItem("done"));
  document.getElementById("completedList").innerHTML = "";

  jobsHaveBeenDone.forEach((element) => {
    const doneListItem = document.createElement("li");
    doneListItem.className = "task-item";
    doneListItem.id = id;

    const doneButtonContainer = document.createElement("div");
    doneButtonContainer.className = "button-container";

    const doneTaskText = document.createElement("span");
    doneTaskText.className = "task-text";
    doneTaskText.textContent = element;
    doneTaskText.id = id;

    //The X button
    // const doneDeleteButton = document.createElement("button");
    // doneDeleteButton.className = "delete-btn";
    // doneDeleteButton.textContent = "X";
    // doneDeleteButton.addEventListener("click", () => deleteFunc(id, task, ""));

    // doneButtonContainer.appendChild(doneDeleteButton);

    doneListItem.appendChild(doneButtonContainer);
    doneListItem.appendChild(doneTaskText);

    document.getElementById("completedList").appendChild(doneListItem);
  });
};
