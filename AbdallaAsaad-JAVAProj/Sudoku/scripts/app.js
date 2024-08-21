import { resetGame } from "./buttonEvents.js";
import { checkSolution } from "./buttonEvents.js";
import { handleCellInput } from "./handleCellInput.js";
import { numOfErrors } from "./handleCellInput.js";

const sudokuBoard = document.getElementById("sudoku-board");
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 81; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.contentEditable = true;

    cell.dataset.index = i; // Add a data attribute for the cell index

    // Add input event listener
    cell.addEventListener("input", handleCellInput);
    sudokuBoard.appendChild(cell);
  }

  function fillSudokuBoard() {
    // Generate a new puzzle
    const puzzle = sudoku.generate("very-hard");
    console.log(typeof puzzle);
    console.log(puzzle);

    const solution = sudoku.solve(puzzle);
    // console.log(typeof solution);

    window.sudokuSolution = solution;
    // Then get all the cells
    const cells = document.querySelectorAll("#sudoku-board .cell");
    // Fill the cells with the generated puzzle
    cells.forEach((cell, index) => {
      const value = puzzle[index];
      if (value !== ".") {
        cell.textContent = value;
        cell.contentEditable = false; // Make pre-filled cells non-editable
        cell.classList.add("prefilled");
      } else {
        cell.textContent = "";
        cell.contentEditable = true;
        cell.classList.remove("prefilled");
      }
    });
  }
  // Fill the board when the page loads
  fillSudokuBoard();

  const resetTheGame = document.getElementById("reset-game");
  const checkTheSolution = document.getElementById("check-solution");
  const newGame = document.getElementById("new-game");

  resetTheGame.addEventListener("click", resetGame);
  // checkTheSolution.addEventListener("click", checkSolution);
  newGame.addEventListener("click", fillSudokuBoard);

  const startTheGame = document.getElementById("start-game");
  startTheGame.addEventListener("click", () => {
    let userName = document.getElementById("player-name");
    if (userName.value != "") {
      const welcomeMessage = document.getElementById("player-form");
      welcomeMessage.innerHTML = `Welcome <span style="color: red;">${userName.value}</span>, show us how your IQ works!`;
      document.getElementById("sudoku-board").style.display = "grid";
      document.querySelector(".controls").style.display = "flex";
      document.getElementById("mistakes").style.display = "flex";
      document.getElementById("myMistakesDiv").innerHTML = numOfErrors;
    } else alert("must Enter your Name");
  });
});
