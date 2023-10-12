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

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJ";

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function generateRandomNumber() {
  return Math.ceil(Math.random() * 10);
}

function randomAttack() {
  let coords = generateRandomLetter() + generateRandomNumber();
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
