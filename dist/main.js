/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/board */ \"./src/scripts/board.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const boardContainer = document.querySelector(\"#board-container\");\n  const gameBoard = new _scripts_board__WEBPACK_IMPORTED_MODULE_0__.Board(boardContainer);\n  const boardFake = _scripts_board__WEBPACK_IMPORTED_MODULE_0__.BoardFake;\n  console.log(boardFake);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBRUFFLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLE1BQUs7RUFDL0MsTUFBTUMsY0FBYyxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXZCO0VBQ0EsTUFBTUMsU0FBUyxHQUFJLElBQUlMLGlEQUFKLENBQVVHLGNBQVYsQ0FBbkI7RUFDQSxNQUFNRyxTQUFTLEdBQUdQLHFEQUFsQjtFQUNBUSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsU0FBWjtBQUNILENBTEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9hcmRGYWtlIH0gZnJvbSAnLi9zY3JpcHRzL2JvYXJkJztcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9zY3JpcHRzL2JvYXJkJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PiB7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBnYW1lQm9hcmQgPSAgbmV3IEJvYXJkKGJvYXJkQ29udGFpbmVyKTtcbiAgICBjb25zdCBib2FyZEZha2UgPSBCb2FyZEZha2VcbiAgICBjb25zb2xlLmxvZyhib2FyZEZha2UpXG59KVxuIl0sIm5hbWVzIjpbIkJvYXJkRmFrZSIsIkJvYXJkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYm9hcmRDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiZ2FtZUJvYXJkIiwiYm9hcmRGYWtlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": function() { return /* binding */ Board; },\n/* harmony export */   \"BoardFake\": function() { return /* binding */ BoardFake; }\n/* harmony export */ });\nclass Board {\n  constructor(container) {\n    this.container = container;\n    this.loadBoard();\n  }\n\n  loadBoard() {\n    const gameBoard = document.createElement(\"div\");\n    gameBoard.classList.add(\"board\");\n\n    for (let i = 0; i < 9; i++) {\n      let sector = document.createElement(\"div\");\n      sector.classList.add(\"sector\");\n\n      for (let j = 0; j < 9; j++) {\n        let cell = document.createElement(\"div\");\n        cell.classList.add(\"cell\");\n        sector.appendChild(cell);\n      }\n\n      gameBoard.appendChild(sector);\n    }\n\n    this.container.appendChild(gameBoard);\n  }\n\n}\n;\nconst BoardFake = 'fake board class';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLEtBQU4sQ0FBWTtFQUNmQyxXQUFXLENBQUNDLFNBQUQsRUFBWTtJQUNuQixLQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtJQUNBLEtBQUtDLFNBQUw7RUFDSDs7RUFFREEsU0FBUyxHQUFHO0lBQ1IsTUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7SUFDQUYsU0FBUyxDQUFDRyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixPQUF4Qjs7SUFFQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7TUFDeEIsSUFBSUMsTUFBTSxHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtNQUNBSSxNQUFNLENBQUNILFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFFBQXJCOztNQUNBLEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtRQUN4QixJQUFJQyxJQUFJLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFYO1FBQ0FNLElBQUksQ0FBQ0wsU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CO1FBQ0FFLE1BQU0sQ0FBQ0csV0FBUCxDQUFtQkQsSUFBbkI7TUFDSDs7TUFDTFIsU0FBUyxDQUFDUyxXQUFWLENBQXNCSCxNQUF0QjtJQUNDOztJQUNELEtBQUtSLFNBQUwsQ0FBZVcsV0FBZixDQUEyQlQsU0FBM0I7RUFDSDs7QUFyQmM7QUFzQmxCO0FBRUQsTUFBTVUsU0FBUyxHQUFHLGtCQUFsQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9ib2FyZC5qcz9iY2IwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLmxvYWRCb2FyZCgpO1xuICAgIH07XG5cbiAgICBsb2FkQm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdhbWVCb2FyZC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRcIik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgc2VjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWN0b3JcIilcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgOTsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgICAgICAgICAgc2VjdG9yLmFwcGVuZENoaWxkKGNlbGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChzZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVCb2FyZCk7XG4gICAgfVxufTtcblxuY29uc3QgQm9hcmRGYWtlID0gJ2Zha2UgYm9hcmQgY2xhc3MnXG5leHBvcnQgeyBCb2FyZEZha2UgfVxuXG4iXSwibmFtZXMiOlsiQm9hcmQiLCJjb25zdHJ1Y3RvciIsImNvbnRhaW5lciIsImxvYWRCb2FyZCIsImdhbWVCb2FyZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImkiLCJzZWN0b3IiLCJqIiwiY2VsbCIsImFwcGVuZENoaWxkIiwiQm9hcmRGYWtlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;