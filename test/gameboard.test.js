const gameBoardModule = require("../src/gameboard");

// Uncommenting this ruins the test for calculateCoords
// describe("ship placement", () => {
//   test("place ship to place ", () => {
//     const shipManager = gameBoardModule.shipManager();

//     const mockCalculateCoords = jest.fn(() => ["D4", "D5", "D6"]);
//     gameBoardModule.calculateCoords = mockCalculateCoords;
//     gameBoardModule.placeShip(shipManager.destroyer, "D", "5", "n");

//     const expectedCoordinates = ["D4", "D5", "D6"];
//     expectedCoordinates.forEach((coordinate) => {
//       expect(gameBoardModule.gameBoard).toContain(coordinate);
//     });
//   });
// });

describe("Calculate coords when ship in north direction", () => {
  test("calculateCoords with length of 2", () => {
    const coords = gameBoardModule.calculateCoords(2, "D", "5", "n");
    expect(coords).toStrictEqual(["D4", "D5"]);
  });

  test("calculateCoords with length of 3", () => {
    const coords = gameBoardModule.calculateCoords(3, "D", "5", "n");
    expect(coords).toStrictEqual(["D4", "D5", "D6"]);
  });

  test("calculateCoords with length of 4", () => {
    const coords = gameBoardModule.calculateCoords(4, "D", "5", "n");
    expect(coords).toStrictEqual(["D3", "D4", "D5", "D6"]);
  });

  test("calculateCoords with length of 5", () => {
    const coords = gameBoardModule.calculateCoords(5, "D", "5", "n");
    expect(coords).toStrictEqual(["D3", "D4", "D5", "D6", "D7"]);
  });
});

describe("Calculate coords when ship in east direction", () => {
  test("calculateCoords with length of 4", () => {
    const coords = gameBoardModule.calculateCoords(4, "D", "5", "e");
    expect(coords).toStrictEqual(["B5", "C5", "D5", "E5"]);
  });

  test("calculateCoords with length of 5", () => {
    const coords = gameBoardModule.calculateCoords(5, "D", "5", "e");
    expect(coords).toStrictEqual(["B5", "C5", "D5", "E5", "F5"]);
  });
});

describe("Calculate coords when ship in south direction", () => {
  test("calculateCoords with length of 4", () => {
    const coords = gameBoardModule.calculateCoords(4, "D", "5", "s");
    expect(coords).toStrictEqual(["D7", "D6", "D5", "D4"]);
  });

  test("calculateCoords with length of 5", () => {
    const coords = gameBoardModule.calculateCoords(5, "D", "5", "s");
    expect(coords).toStrictEqual(["D7", "D6", "D5", "D4", "D3"]);
  });
});

describe("Calculate coords when ship in west direction", () => {
  test("calculateCoords with length of 4", () => {
    const coords = gameBoardModule.calculateCoords(4, "D", "5", "w");
    expect(coords).toStrictEqual(["F5", "E5", "D5", "C5"]);
  });

  test("calculateCoords with length of 5", () => {
    const coords = gameBoardModule.calculateCoords(5, "D", "5", "w");
    expect(coords).toStrictEqual(["F5", "E5", "D5", "C5", "B5"]);
  });
});

describe("cellEmpty", () => {
  gameBoardModule.gameBoard.push("D1");
  test("if cell is empty", () => {
    const empty = gameBoardModule.cellEmpty("D1");
    expect(empty).toBe(false);
  });

  test("if cell is not empty", () => {
    const empty = gameBoardModule.cellEmpty("A1");
    expect(empty).toBe(true);
  });
});
