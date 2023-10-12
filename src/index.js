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
