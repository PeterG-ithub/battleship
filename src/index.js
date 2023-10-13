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

const board1 = createBoard();
let state = 0;
const ships = ["carrier", "battleship", "destroyer", "submarine", "patrolBoat"];
let shipIndex = 0;
const directions = ["n", "e", "s", "w"];
let directionIndex = 0;
let direction = directions[directionIndex];
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

function addBoardClickListener() {
  const boards = document.querySelectorAll(".board");
  boards.forEach((board) => {
    board.addEventListener("click", (element) => {
      handleBoardClick(element.target.id);
    });
  });
  console.log("Added board listener.");
}

function addShipHoverListener() {
  const board1 = document.querySelector(".board1");
  board1.addEventListener("mouseover", (element) => {
    addHoverEffect(element.target.id);
  });
  board1.addEventListener("mouseout", (element) => {
    removeHoverEffect(element.target.id);
  });
}

function removeShipHoverListener() {
  const board1 = document.querySelector(".board1");
  board1.removeEventListener("mouseover", (element) => {
    addHoverEffect(element.target.id);
  });
  board1.removeEventListener("mouseout", (element) => {
    removeHoverEffect(element.target.id);
  });
}

function addShipRotateListener() {
  console.log(direction);
  document.addEventListener("keydown", (key) => {
    if (key.key === "r") {
      directionIndex = (directionIndex + 1) % directions.length;
      direction = directions[directionIndex];
      console.log(direction);
    }
  });
}

function addHoverEffect(id) {
  let coord = id.split("");
  console.log(coord);
  if (board1.ships[`${ships[shipIndex]}`] == undefined) {
    removeShipHoverListener();
    return;
  }
  let shipLength = board1.ships[`${ships[shipIndex]}`].length;
  if (coord.length != 0) {
    let [a, x, y] = coord;
    const coords = board1.calculateCoords(shipLength, x, y, direction);
    if (board1.validPlacement(coords)) {
      coords.forEach((coord) => {
        const cell = document.getElementById(`P${coord}`);
        cell.classList.add("hover-in");
      });
    }
  }
}

function removeHoverEffect(id) {
  let coord = id.split("");
  if (board1.ships[`${ships[shipIndex]}`] == undefined) {
    removeShipHoverListener();
    return;
  }
  let shipLength = board1.ships[`${ships[shipIndex]}`].length;
  if (coord.length != 0) {
    let [a, x, y] = coord;
    const coords = board1.calculateCoords(shipLength, x, y, direction);
    if (board1.validPlacement(coords)) {
      coords.forEach((coord) => {
        const cell = document.getElementById(`P${coord}`);
        cell.classList.remove("hover-in");
      });
    }
  }
}

function displayShip(coordsArr) {
  coordsArr.forEach((id) => {
    let cell = document.getElementById(`P${id}`);
    cell.classList.add("occupied");
  });
}

function addShips(x, y) {
  const ship = board1.ships[`${ships[shipIndex]}`];
  if (ship === undefined) {
    state = 1;
    return;
  }
  let coordsArr = board1.placeShip(ship, x, y, direction);
  if (coordsArr != 0) {
    displayShip(coordsArr);
    shipIndex += 1;
  }
}

function handleBoardClick(id) {
  let coord = id.split("");
  let [a, x, y] = coord;
  if (state === 0) {
    addShips(x, y);
  }
}

function initialize() {
  createGridDisplay();
  addBoardClickListener();
  addShipHoverListener();
  addShipRotateListener();
}

function gameStart() {}

initialize();
gameStart();
