const shipModule = require("../src/ship");

describe("shipModule", () => {
  test("create a ship with object length, how many times its been hit, sunk", () => {
    const ship = shipModule.createShip(5);
    expect(ship).toEqual({
      length: 5,
      shipHoles: 0,
      sunk: false,
    });
  });

  test("hit function increments shipHoles", () => {
    const ship = shipModule.createShip(3);
    shipModule.hit(ship);
    expect(ship.shipHoles).toBe(1);
  });

  test("isSunk function to be true", () => {
    const ship = shipModule.createShip(3);
    shipModule.hit(ship);
    shipModule.hit(ship);
    shipModule.hit(ship);
    shipModule.isSunk(ship);
    expect(ship.sunk).toBe(true);
  });

  test("isSunk function to be false", () => {
    const ship = shipModule.createShip(3);
    shipModule.hit(ship);
    shipModule.hit(ship);
    shipModule.isSunk(ship);
    expect(ship.sunk).toBe(false);
  });
});
