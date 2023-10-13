import "./style.css";
import "./gameboard";
import "./player";
import "./ship";
import createBoard, { placeShip } from "./gameboard";

const element = document.createElement("div");
element.innerHTML = `
  <h1 class="title">Battleship</h1>
  <div class="board-container">

    <div class="board1-container">
      <div class="board board1"></div>
    </div>
    <div class="board2-container">
      <div class="board board2"></div>
    </div>
  </div>
`;
document.body.appendChild(element);

function createGridDisplay() {
  const board1 = document.querySelector(".board1");
  const board2 = document.querySelector(".board2");
  const rows = "ABCDEFGHIJ";
  const cols = rows.length;
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cols; j++) {
      const cell1 = document.createElement("div");
      cell1.classList.add("cell");
      cell1.setAttribute("id", `P${rows[i] + (j + 1)}`);
      board1.appendChild(cell1);
      const cell2 = document.createElement("div");
      cell2.classList.add("cell");
      cell2.setAttribute("id", `C${rows[i] + (j + 1)}`);
      board2.appendChild(cell2);
    }
  }
}

function addBoardListener() {
  const boards = document.querySelectorAll(".board");
  boards.forEach((board) => {
    board.addEventListener("click", (element) => {
      handleBoardClick(element.target.id);
    });
  });
  console.log("Added board listener.");
}

const board1 = createBoard();

function displayShip(coordsArr) {
  coordsArr.forEach((id) => {
    let cell = document.getElementById(`P${id}`);
    cell.classList.add("occupied");
  });
}

let state = 0;
const ships = ["carrier", "battleship", "destroyer", "submarine", "patrolBoat"];
let shipIndex = 0;

function handleBoardClick(id) {
  let coord = id.split("");
  let [a, x, y] = coord;
  if (state === 0) {
    const ship = board1.ships[`${ships[shipIndex]}`];
    let coordsArr = board1.placeShip(ship, x, y, "n");
    if (coordsArr != 0) {
      displayShip(coordsArr);
      shipIndex += 1;
    }
  }
}

function initialize() {
  createGridDisplay();
  addBoardListener();
}

function gameStart() {}

initialize();
gameStart();
