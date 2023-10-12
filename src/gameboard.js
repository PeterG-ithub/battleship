const shipModule = require("./ship");

const gameBoard = [];

function shipManager() {
  const carrier = shipModule.createShip(5);
  const battleship = shipModule.createShip(4);
  const destroyer = shipModule.createShip(3);
  const submarine = shipModule.createShip(3);
  const patrolBoat = shipModule.createShip(3);

  return { carrier, battleship, destroyer, submarine, patrolBoat };
}

function placeShip(ship, x, y, direction = "n") {
  const coords = calculateCoords(ship.length, x, y, direction);
  coords.forEach((coordinate) => {
    gameBoard.push(coordinate);
  });
}

function calculateCoords(length, x, y, direction) {
  const coords = [];
  if (direction === "n") {
    let center = Math.floor(length / 2);
    for (let i = 0; i < length; i++) {
      coords.push(x + (parseInt(y) - center));
      center -= 1;
    }
  } else if (direction === "e") {
    let center = Math.floor(length / 2);
    let xASCII = x.charCodeAt(0); //char to ASCII
    for (let i = 0; i < length; i++) {
      let x = xASCII - center;
      coords.push(String.fromCharCode(x) + y);
      center -= 1;
    }
  } else if (direction === "s") {
    let center = Math.floor(length / 2);
    for (let i = 0; i < length; i++) {
      coords.push(x + (parseInt(y) + center));
      center -= 1;
    }
  } else if (direction === "w") {
    let center = Math.floor(length / 2);
    let xASCII = x.charCodeAt(0); //char to ASCII
    for (let i = 0; i < length; i++) {
      let x = xASCII + center;
      coords.push(String.fromCharCode(x) + y);
      center -= 1;
    }
  }
  console.log(coords);
  return coords;
}

module.exports = {
  shipManager,
  placeShip,
  gameBoard,
  calculateCoords,
};
