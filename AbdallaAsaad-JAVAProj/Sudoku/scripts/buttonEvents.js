const resetGameBtn = document.getElementById("reset-game");
// const checkSolutionBtn = document.getElementById("check-solution");
// const newGameBtn = document.getElementById("new-game");

// newGameBtn.addEventListener("click", fillSudokuBoard);
resetGameBtn.addEventListener("click", resetGame);
// checkSolutionBtn.addEventListener("click", checkSolution);

export let currentPuzzle = "";
export function checkSolution() {
  //   const cells = document.querySelectorAll("#sudoku-board .cell");
  //   currentPuzzle = "";
  //   cells.forEach((cell) => {
  //     currentPuzzle += cell.textContent || ".";
  //   });
  //   if (sudoku.solve(currentPuzzle)) {
  //     alert("Congratulations! Your solution is correct!");
  //     return true;
  //   } else {
  //     alert("Sorry, your solution is incorrect. Keep trying!");
  //     return false;
  //   }
}

export function resetGame() {
  const cells = document.querySelectorAll("#sudoku-board .cell");
  cells.forEach((cell) => {
    if (!cell.classList.contains("prefilled")) {
      cell.textContent = "";
    }
    cell.contentEditable = "true";
  });
}

export default {
  resetGame: resetGame,
  checkSolution: checkSolution,
  currentPuzzle: currentPuzzle,
};
