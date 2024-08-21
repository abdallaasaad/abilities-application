export let numOfErrors = 0;

export function handleCellInput(event) {
  const cell = event.target;
  const value = cell.textContent;
  const index = parseInt(cell.dataset.index);

  cell.classList.remove("correct-input", "incorrect-input");

  // only allow single digits 1-9
  if (!/^[1-9]$/.test(value)) {
    cell.textContent = "";
    return;
  }
  if (value === window.sudokuSolution[index]) {
    cell.classList.add("correct-input");
  } else {
    // cell.style.color = "red";
    cell.classList.add("incorrect-input");
    numOfErrors++;
    document.getElementById("myMistakesDiv").innerHTML = numOfErrors;
    // document.getElementById("myMistakesDiv").innerHTML = numOfErrors;
  }

  if (numOfErrors == 5) {
    alert(
      "Game Over! but we will give you the opportunety to improve your skills!"
    );
    const cells = document.querySelectorAll("#sudoku-board .cell");
    cells.forEach((cell) => (cell.contentEditable = "false"));
    numOfErrors = 0;
    cell.classList.remove("correct-input", "incorrect-input");
  }
}

export default {
  handleCellInput: handleCellInput,
  numOfErrors: numOfErrors,
};
