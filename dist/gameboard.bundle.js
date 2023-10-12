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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gameboard.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxtQkFBbUIsbUJBQU8sQ0FBQyw2QkFBUTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxrQ0FBa0M7QUFDbEMsb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxrQ0FBa0M7QUFDbEMsb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdEdBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNsQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaGlwTW9kdWxlID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcblxuY29uc3QgZ2FtZUJvYXJkID0gW107XG5jb25zdCBtaXNzZXMgPSBbXTtcbmZ1bmN0aW9uIHNoaXBNYW5hZ2VyKCkge1xuICBjb25zdCBjYXJyaWVyID0gc2hpcE1vZHVsZS5jcmVhdGVTaGlwKDUpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gc2hpcE1vZHVsZS5jcmVhdGVTaGlwKDQpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBzaGlwTW9kdWxlLmNyZWF0ZVNoaXAoMyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IHNoaXBNb2R1bGUuY3JlYXRlU2hpcCgzKTtcbiAgY29uc3QgcGF0cm9sQm9hdCA9IHNoaXBNb2R1bGUuY3JlYXRlU2hpcCgzKTtcblxuICByZXR1cm4geyBjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sQm9hdCB9O1xufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgeCwgeSwgZGlyZWN0aW9uID0gXCJuXCIpIHtcbiAgY29uc3QgY29vcmRzID0gY2FsY3VsYXRlQ29vcmRzKHNoaXAubGVuZ3RoLCB4LCB5LCBkaXJlY3Rpb24pO1xuICBjb29yZHMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGdhbWVCb2FyZC5wdXNoKGNvb3JkaW5hdGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQ29vcmRzKGxlbmd0aCwgeCwgeSwgZGlyZWN0aW9uKSB7XG4gIGNvbnN0IGNvb3JkcyA9IFtdO1xuICBpZiAoZGlyZWN0aW9uID09PSBcIm5cIikge1xuICAgIGxldCBjZW50ZXIgPSBNYXRoLmZsb29yKGxlbmd0aCAvIDIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvb3Jkcy5wdXNoKHggKyAocGFyc2VJbnQoeSkgLSBjZW50ZXIpKTtcbiAgICAgIGNlbnRlciAtPSAxO1xuICAgIH1cbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiZVwiKSB7XG4gICAgbGV0IGNlbnRlciA9IE1hdGguZmxvb3IobGVuZ3RoIC8gMik7XG4gICAgbGV0IHhBU0NJSSA9IHguY2hhckNvZGVBdCgwKTsgLy9jaGFyIHRvIEFTQ0lJXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHggPSB4QVNDSUkgLSBjZW50ZXI7XG4gICAgICBjb29yZHMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHgpICsgeSk7XG4gICAgICBjZW50ZXIgLT0gMTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInNcIikge1xuICAgIGxldCBjZW50ZXIgPSBNYXRoLmZsb29yKGxlbmd0aCAvIDIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvb3Jkcy5wdXNoKHggKyAocGFyc2VJbnQoeSkgKyBjZW50ZXIpKTtcbiAgICAgIGNlbnRlciAtPSAxO1xuICAgIH1cbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwid1wiKSB7XG4gICAgbGV0IGNlbnRlciA9IE1hdGguZmxvb3IobGVuZ3RoIC8gMik7XG4gICAgbGV0IHhBU0NJSSA9IHguY2hhckNvZGVBdCgwKTsgLy9jaGFyIHRvIEFTQ0lJXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHggPSB4QVNDSUkgKyBjZW50ZXI7XG4gICAgICBjb29yZHMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHgpICsgeSk7XG4gICAgICBjZW50ZXIgLT0gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuZnVuY3Rpb24gY2VsbEVtcHR5KGNvb3Jkcykge1xuICByZXR1cm4gIWdhbWVCb2FyZC5pbmNsdWRlcyhjb29yZHMpO1xufVxuXG5mdW5jdGlvbiBvdXRPZkJvdW5kcyhjb29yZHMpIHtcbiAgY29uc3QgcmVnZXggPSAvXltBLUpdKFsxLTldfDEwKSQvO1xuICByZXR1cm4gIXJlZ2V4LnRlc3QoY29vcmRzKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRQbGFjZW1lbnQoY29vcmRBcnIpIHtcbiAgY29uc29sZS5sb2coY29vcmRBcnIpO1xuICBjb25zdCB2YWxpZCA9IGNvb3JkQXJyLmV2ZXJ5KChjb29yZCkgPT4ge1xuICAgIGlmIChjZWxsRW1wdHkoY29vcmQpICYmICFvdXRPZkJvdW5kcyhjb29yZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHZhbGlkO1xufVxuXG5mdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3Jkcykge1xuICBtaXNzZXMucHVzaChjb29yZHMpO1xuICByZXR1cm4gZ2FtZUJvYXJkLmluY2x1ZGVzKGNvb3Jkcyk7XG59XG5cbmZ1bmN0aW9uIGxvc3Qoc2hpcHMpIHtcbiAgbGV0IGRlYWRTaGlwcyA9IDA7XG4gIGZvciAoc2hpcCBpbiBzaGlwcykge1xuICAgIGlmIChzaGlwc1tzaGlwXS5zdW5rKSB7XG4gICAgICBkZWFkU2hpcHMgKz0gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYWRTaGlwcyA9PT0gT2JqZWN0LmtleXMoc2hpcHMpLmxlbmd0aDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNoaXBNYW5hZ2VyLFxuICBwbGFjZVNoaXAsXG4gIGdhbWVCb2FyZCxcbiAgY2FsY3VsYXRlQ29vcmRzLFxuICBjZWxsRW1wdHksXG4gIG91dE9mQm91bmRzLFxuICB2YWxpZFBsYWNlbWVudCxcbiAgcmVjZWl2ZUF0dGFjayxcbiAgbWlzc2VzLFxuICBsb3N0LFxufTtcbiIsImZ1bmN0aW9uIGNyZWF0ZVNoaXAobGVuZ3RoKSB7XG4gIHJldHVybiB7IGxlbmd0aCwgc2hpcEhvbGVzOiAwLCBzdW5rOiBmYWxzZSB9O1xufVxuXG5mdW5jdGlvbiBoaXQoc2hpcCkge1xuICBzaGlwLnNoaXBIb2xlcyArPSAxO1xufVxuXG5mdW5jdGlvbiBpc1N1bmsoc2hpcCkge1xuICBpZiAoIXNoaXAuc3VuayAmJiBzaGlwLmxlbmd0aCA9PT0gc2hpcC5zaGlwSG9sZXMpIHtcbiAgICBzaGlwLnN1bmsgPSB0cnVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVTaGlwLFxuICBoaXQsXG4gIGlzU3Vuayxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZ2FtZWJvYXJkLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9