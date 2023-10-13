const gameBoardModule = require("./gameboard");

let turn = "player";

function changeTurn() {
  // console.log("Before:", turn);
  if (turn === "player") {
    turn = "comp";
  } else {
    turn = "player";
  }
  // console.log("After:", turn);
}

function randomAttack() {
  let coords = gameBoardModule.generateRandomCoord();
  while (gameBoardModule.misses.includes(coords)) {
    coords = generateRandomLetter() + generateRandomNumber();
    if (!gameBoardModule.misses.includes(coords)) {
      break;
    }
  }
  gameBoardModule.misses.push(coords);
}

module.exports = {
  turn,
  changeTurn,
  randomAttack,
};
