/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const shipModule = __webpack_require__(/*! ./ship */ "./src/ship.js");

const gameBoard = [];
const misses = [];
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
  return coords;
}

function cellEmpty(coords) {
  return !gameBoard.includes(coords);
}

function outOfBounds(coords) {
  const regex = /^[A-J]([1-9]|10)$/;
  return !regex.test(coords);
}

function validPlacement(coordArr) {
  console.log(coordArr);
  const valid = coordArr.every((coord) => {
    if (cellEmpty(coord) && !outOfBounds(coord)) {
      return true;
    } else {
      return false;
    }
  });
  return valid;
}

function receiveAttack(coords) {
  misses.push(coords);
  return gameBoard.includes(coords);
}

function lost(ships) {
  let deadShips = 0;
  for (ship in ships) {
    if (ships[ship].sunk) {
      deadShips += 1;
    }
  }
  return deadShips === Object.keys(ships).length;
}

module.exports = {
  shipManager,
  placeShip,
  gameBoard,
  calculateCoords,
  cellEmpty,
  outOfBounds,
  validPlacement,
  receiveAttack,
  misses,
  lost,
};


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const gameBoardModule = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

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


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/player.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxtQkFBbUIsbUJBQU8sQ0FBQyw2QkFBUTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxrQ0FBa0M7QUFDbEMsb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxrQ0FBa0M7QUFDbEMsb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdEdBLHdCQUF3QixtQkFBTyxDQUFDLHVDQUFhOztBQUU3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNsQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaGlwTW9kdWxlID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcblxuY29uc3QgZ2FtZUJvYXJkID0gW107XG5jb25zdCBtaXNzZXMgPSBbXTtcbmZ1bmN0aW9uIHNoaXBNYW5hZ2VyKCkge1xuICBjb25zdCBjYXJyaWVyID0gc2hpcE1vZHVsZS5jcmVhdGVTaGlwKDUpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gc2hpcE1vZHVsZS5jcmVhdGVTaGlwKDQpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBzaGlwTW9kdWxlLmNyZWF0ZVNoaXAoMyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IHNoaXBNb2R1bGUuY3JlYXRlU2hpcCgzKTtcbiAgY29uc3QgcGF0cm9sQm9hdCA9IHNoaXBNb2R1bGUuY3JlYXRlU2hpcCgzKTtcblxuICByZXR1cm4geyBjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sQm9hdCB9O1xufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgeCwgeSwgZGlyZWN0aW9uID0gXCJuXCIpIHtcbiAgY29uc3QgY29vcmRzID0gY2FsY3VsYXRlQ29vcmRzKHNoaXAubGVuZ3RoLCB4LCB5LCBkaXJlY3Rpb24pO1xuICBjb29yZHMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGdhbWVCb2FyZC5wdXNoKGNvb3JkaW5hdGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQ29vcmRzKGxlbmd0aCwgeCwgeSwgZGlyZWN0aW9uKSB7XG4gIGNvbnN0IGNvb3JkcyA9IFtdO1xuICBpZiAoZGlyZWN0aW9uID09PSBcIm5cIikge1xuICAgIGxldCBjZW50ZXIgPSBNYXRoLmZsb29yKGxlbmd0aCAvIDIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvb3Jkcy5wdXNoKHggKyAocGFyc2VJbnQoeSkgLSBjZW50ZXIpKTtcbiAgICAgIGNlbnRlciAtPSAxO1xuICAgIH1cbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiZVwiKSB7XG4gICAgbGV0IGNlbnRlciA9IE1hdGguZmxvb3IobGVuZ3RoIC8gMik7XG4gICAgbGV0IHhBU0NJSSA9IHguY2hhckNvZGVBdCgwKTsgLy9jaGFyIHRvIEFTQ0lJXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHggPSB4QVNDSUkgLSBjZW50ZXI7XG4gICAgICBjb29yZHMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHgpICsgeSk7XG4gICAgICBjZW50ZXIgLT0gMTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInNcIikge1xuICAgIGxldCBjZW50ZXIgPSBNYXRoLmZsb29yKGxlbmd0aCAvIDIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvb3Jkcy5wdXNoKHggKyAocGFyc2VJbnQoeSkgKyBjZW50ZXIpKTtcbiAgICAgIGNlbnRlciAtPSAxO1xuICAgIH1cbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwid1wiKSB7XG4gICAgbGV0IGNlbnRlciA9IE1hdGguZmxvb3IobGVuZ3RoIC8gMik7XG4gICAgbGV0IHhBU0NJSSA9IHguY2hhckNvZGVBdCgwKTsgLy9jaGFyIHRvIEFTQ0lJXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHggPSB4QVNDSUkgKyBjZW50ZXI7XG4gICAgICBjb29yZHMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHgpICsgeSk7XG4gICAgICBjZW50ZXIgLT0gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuZnVuY3Rpb24gY2VsbEVtcHR5KGNvb3Jkcykge1xuICByZXR1cm4gIWdhbWVCb2FyZC5pbmNsdWRlcyhjb29yZHMpO1xufVxuXG5mdW5jdGlvbiBvdXRPZkJvdW5kcyhjb29yZHMpIHtcbiAgY29uc3QgcmVnZXggPSAvXltBLUpdKFsxLTldfDEwKSQvO1xuICByZXR1cm4gIXJlZ2V4LnRlc3QoY29vcmRzKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRQbGFjZW1lbnQoY29vcmRBcnIpIHtcbiAgY29uc29sZS5sb2coY29vcmRBcnIpO1xuICBjb25zdCB2YWxpZCA9IGNvb3JkQXJyLmV2ZXJ5KChjb29yZCkgPT4ge1xuICAgIGlmIChjZWxsRW1wdHkoY29vcmQpICYmICFvdXRPZkJvdW5kcyhjb29yZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHZhbGlkO1xufVxuXG5mdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3Jkcykge1xuICBtaXNzZXMucHVzaChjb29yZHMpO1xuICByZXR1cm4gZ2FtZUJvYXJkLmluY2x1ZGVzKGNvb3Jkcyk7XG59XG5cbmZ1bmN0aW9uIGxvc3Qoc2hpcHMpIHtcbiAgbGV0IGRlYWRTaGlwcyA9IDA7XG4gIGZvciAoc2hpcCBpbiBzaGlwcykge1xuICAgIGlmIChzaGlwc1tzaGlwXS5zdW5rKSB7XG4gICAgICBkZWFkU2hpcHMgKz0gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYWRTaGlwcyA9PT0gT2JqZWN0LmtleXMoc2hpcHMpLmxlbmd0aDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNoaXBNYW5hZ2VyLFxuICBwbGFjZVNoaXAsXG4gIGdhbWVCb2FyZCxcbiAgY2FsY3VsYXRlQ29vcmRzLFxuICBjZWxsRW1wdHksXG4gIG91dE9mQm91bmRzLFxuICB2YWxpZFBsYWNlbWVudCxcbiAgcmVjZWl2ZUF0dGFjayxcbiAgbWlzc2VzLFxuICBsb3N0LFxufTtcbiIsImNvbnN0IGdhbWVCb2FyZE1vZHVsZSA9IHJlcXVpcmUoXCIuL2dhbWVib2FyZFwiKTtcblxubGV0IHR1cm4gPSBcInBsYXllclwiO1xuXG5mdW5jdGlvbiBjaGFuZ2VUdXJuKCkge1xuICAvLyBjb25zb2xlLmxvZyhcIkJlZm9yZTpcIiwgdHVybik7XG4gIGlmICh0dXJuID09PSBcInBsYXllclwiKSB7XG4gICAgdHVybiA9IFwiY29tcFwiO1xuICB9IGVsc2Uge1xuICAgIHR1cm4gPSBcInBsYXllclwiO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKFwiQWZ0ZXI6XCIsIHR1cm4pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUxldHRlcigpIHtcbiAgY29uc3QgYWxwaGFiZXQgPSBcIkFCQ0RFRkdISUpcIjtcblxuICByZXR1cm4gYWxwaGFiZXRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxwaGFiZXQubGVuZ3RoKV07XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTnVtYmVyKCkge1xuICByZXR1cm4gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMCk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUF0dGFjaygpIHtcbiAgbGV0IGNvb3JkcyA9IGdlbmVyYXRlUmFuZG9tTGV0dGVyKCkgKyBnZW5lcmF0ZVJhbmRvbU51bWJlcigpO1xuICB3aGlsZSAoZ2FtZUJvYXJkTW9kdWxlLm1pc3Nlcy5pbmNsdWRlcyhjb29yZHMpKSB7XG4gICAgY29vcmRzID0gZ2VuZXJhdGVSYW5kb21MZXR0ZXIoKSArIGdlbmVyYXRlUmFuZG9tTnVtYmVyKCk7XG4gICAgaWYgKCFnYW1lQm9hcmRNb2R1bGUubWlzc2VzLmluY2x1ZGVzKGNvb3JkcykpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBnYW1lQm9hcmRNb2R1bGUubWlzc2VzLnB1c2goY29vcmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHR1cm4sXG4gIGNoYW5nZVR1cm4sXG4gIHJhbmRvbUF0dGFjayxcbn07XG4iLCJmdW5jdGlvbiBjcmVhdGVTaGlwKGxlbmd0aCkge1xuICByZXR1cm4geyBsZW5ndGgsIHNoaXBIb2xlczogMCwgc3VuazogZmFsc2UgfTtcbn1cblxuZnVuY3Rpb24gaGl0KHNoaXApIHtcbiAgc2hpcC5zaGlwSG9sZXMgKz0gMTtcbn1cblxuZnVuY3Rpb24gaXNTdW5rKHNoaXApIHtcbiAgaWYgKCFzaGlwLnN1bmsgJiYgc2hpcC5sZW5ndGggPT09IHNoaXAuc2hpcEhvbGVzKSB7XG4gICAgc2hpcC5zdW5rID0gdHJ1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlU2hpcCxcbiAgaGl0LFxuICBpc1N1bmssXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BsYXllci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==