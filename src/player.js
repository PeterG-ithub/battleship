const gameBoardModule = require("./gameboard");

function changeTurn(turn) {
  // console.log("Before:", turn);
  if (turn === "player") {
    return (turn = "comp");
  } else {
    return (turn = "player");
  }
  // console.log("After:", turn);
}

module.exports = {
  changeTurn,
};
