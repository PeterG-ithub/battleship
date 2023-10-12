import "./style.css";
import "./gameboard";
import "./player";
import "./ship";

const element = document.createElement("div");
element.innerHTML = `
  <h1 class="title">Battleship</h1>
  <div class="board-container">

    <div class="board1-container">
      <div class="board"></div>
    </div>
    <div class="board2-container">
      <div class="board"></div>
    </div>
  </div>
`;
document.body.appendChild(element);

function createGridDisplay(rows, cols) {
  const boards = document.querySelectorAll(".board");
  boards.forEach((board) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        board.appendChild(cell);
      }
    }
  });
}

createGridDisplay(10, 10);
