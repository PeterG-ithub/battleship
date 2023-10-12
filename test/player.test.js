const playerModule = require("../src/player");

beforeEach(() => {
  jest.resetModules();
  playerModule.turn = "";
});

describe("changeTurn", () => {
  test("change player turn from player to comp", () => {
    playerModule.turn = "player";
    console.log(playerModule.turn);
    playerModule.changeTurn();
    console.log(playerModule.turn);
    expect(playerModule.turn).toBe("comp");
  });

  // test("change player turn from comp to player", () => {
  //   playerModule.turn = "comp";
  //   playerModule.changeTurn();
  //   expect(playerModule.turn).toBe("player");
  // });
});

describe("randomAttack", () => {
  // for (let letter of "ABCDEFGHIJ") {
  //   for (let number of ["1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
  //     let str = letter + number;
  //     if (str.match(/^[A-J]([1-9]|10)$/)) {
  //       gameBoardModule.misses.push(str);
  //     }
  //   }
  // }

  test("test", () => {});
});
