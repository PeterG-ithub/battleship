function createShip(length) {
  return { length, shipHoles: 0, sunk: false };
}

function hit(ship) {
  ship.shipHoles += 1;
}

function isSunk(ship) {
  if (!ship.sunk && ship.length === ship.shipHoles) {
    ship.sunk = true;
  }
}

module.exports = {
  createShip,
  hit,
  isSunk,
};
