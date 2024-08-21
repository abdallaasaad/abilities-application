import { deleteFunc } from "./deletingJobs.js";
// import { completeFunc } from "./doneJobs.js";
import { saveDoneJobs } from "./importInputToLocalStorage.js";

export const importDataFromLocalStorage = () => {
  let importedDataFromLocalStorage =
    JSON.parse(localStorage.getItem("jobs")) || [];

  // Clear existing list items
  document.getElementById("todoList").innerHTML = "";

  importedDataFromLocalStorage.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.className = "task-item";
    listItem.id = index;

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = task;
    taskText.id = task; // Just the task text, no index

    // The X button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () =>
      deleteFunc(listItem.id, taskText.id, "jobs")
    );

    // The ✓ button
    const completeButton = document.createElement("button");
    completeButton.className = "complete-btn";
    completeButton.textContent = "✓";
    // completeButton.id =index
    completeButton.addEventListener("click", () =>
      saveDoneJobs(listItem.id, taskText.textContent)
    );

    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(completeButton);

    listItem.appendChild(buttonContainer);
    listItem.appendChild(taskText);
    // console.log(importedDataFromLocalStorage);
    // console.log(JSON.parse(localStorage.getItem("jobs")));
    // console.log(typeof JSON.parse(localStorage.getItem("jobs")));
    // JSON.parse(localStorage.getItem("jobs")).shift();
    // console.log(JSON.parse(localStorage.getItem("jobs")));
    // console.log(importedDataFromLocalStorage);

    document.getElementById("todoList").appendChild(listItem);
  });
};
