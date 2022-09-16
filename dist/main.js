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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/board */ \"./src/scripts/board.js\");\n/* harmony import */ var _scripts_canvas_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/canvas_board */ \"./src/scripts/canvas_board.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // const boardContainer = document.querySelector(\"#board-container\");\n  // const gameBoard =  new Board(boardContainer);\n  // const boardFake = BoardFake\n  // console.log(boardFake)\n  const canvas = document.querySelector(\"canvas\");\n  const ctx = canvas.getContext('2d');\n  canvas.height = 600;\n  canvas.width = 600; // ctx.fillStyle = \"green\";\n  // ctx.fillRect(0, 0, 600, 600);\n\n  const board = new _scripts_canvas_board__WEBPACK_IMPORTED_MODULE_1__.CanvasBoard(null, null, null, 600, 600);\n  board.drawGridLines(ctx);\n  const sampleBasicPuzzle = [6, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 6, 0, 0, 8, 0, 9, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 4, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 4, 7, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 7, 2, 0, 0, 2, 0, 3, 0, 0, 9, 0, 0, 0, 0, 0, 0, 1, 0, 0, 7, 0, 6];\n  board.drawPenMarks(ctx, sampleBasicPuzzle);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBRUFHLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLE1BQUs7RUFDL0M7RUFDQTtFQUNBO0VBQ0E7RUFFQSxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixRQUF2QixDQUFmO0VBQ0EsTUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtFQUNBSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsR0FBaEI7RUFDQUosTUFBTSxDQUFDSyxLQUFQLEdBQWUsR0FBZixDQVQrQyxDQVUvQztFQUNBOztFQUVBLE1BQU1DLEtBQUssR0FBRyxJQUFJVCw4REFBSixDQUFnQixJQUFoQixFQUFzQixJQUF0QixFQUE0QixJQUE1QixFQUFrQyxHQUFsQyxFQUF1QyxHQUF2QyxDQUFkO0VBQ0FTLEtBQUssQ0FBQ0MsYUFBTixDQUFvQkwsR0FBcEI7RUFFQSxNQUFNTSxpQkFBaUIsR0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CLENBQW5CLEVBQXFCLENBQXJCLEVBQXVCLENBQXZCLEVBQXlCLENBQXpCLEVBQTJCLENBQTNCLEVBQTZCLENBQTdCLEVBQStCLENBQS9CLEVBQWlDLENBQWpDLEVBQW1DLENBQW5DLEVBQXFDLENBQXJDLEVBQXVDLENBQXZDLEVBQXlDLENBQXpDLEVBQTJDLENBQTNDLEVBQTZDLENBQTdDLEVBQStDLENBQS9DLEVBQWlELENBQWpELEVBQW1ELENBQW5ELEVBQXFELENBQXJELEVBQXVELENBQXZELEVBQXlELENBQXpELEVBQTJELENBQTNELEVBQTZELENBQTdELEVBQStELENBQS9ELEVBQWlFLENBQWpFLEVBQW1FLENBQW5FLEVBQXFFLENBQXJFLEVBQXVFLENBQXZFLEVBQXlFLENBQXpFLEVBQTJFLENBQTNFLEVBQTZFLENBQTdFLEVBQStFLENBQS9FLEVBQWlGLENBQWpGLEVBQW1GLENBQW5GLEVBQXFGLENBQXJGLEVBQXVGLENBQXZGLEVBQXlGLENBQXpGLEVBQTJGLENBQTNGLEVBQTZGLENBQTdGLEVBQStGLENBQS9GLEVBQWlHLENBQWpHLEVBQW1HLENBQW5HLEVBQXFHLENBQXJHLEVBQXVHLENBQXZHLEVBQXlHLENBQXpHLEVBQTJHLENBQTNHLEVBQTZHLENBQTdHLEVBQStHLENBQS9HLEVBQWlILENBQWpILEVBQW1ILENBQW5ILEVBQXFILENBQXJILEVBQXVILENBQXZILEVBQXlILENBQXpILEVBQTJILENBQTNILEVBQTZILENBQTdILEVBQStILENBQS9ILEVBQWlJLENBQWpJLEVBQW1JLENBQW5JLEVBQXFJLENBQXJJLEVBQXVJLENBQXZJLEVBQXlJLENBQXpJLEVBQTJJLENBQTNJLEVBQTZJLENBQTdJLEVBQStJLENBQS9JLEVBQWlKLENBQWpKLEVBQW1KLENBQW5KLEVBQXFKLENBQXJKLEVBQXVKLENBQXZKLEVBQXlKLENBQXpKLEVBQTJKLENBQTNKLEVBQTZKLENBQTdKLEVBQStKLENBQS9KLEVBQWlLLENBQWpLLENBQTFCO0VBQ0FGLEtBQUssQ0FBQ0csWUFBTixDQUFtQlAsR0FBbkIsRUFBd0JNLGlCQUF4QjtBQUtILENBdEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvYXJkRmFrZSB9IGZyb20gJy4vc2NyaXB0cy9ib2FyZCc7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vc2NyaXB0cy9ib2FyZCc7XG5pbXBvcnQgeyBDYW52YXNCb2FyZCB9IGZyb20gJy4vc2NyaXB0cy9jYW52YXNfYm9hcmQnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT4ge1xuICAgIC8vIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZC1jb250YWluZXJcIik7XG4gICAgLy8gY29uc3QgZ2FtZUJvYXJkID0gIG5ldyBCb2FyZChib2FyZENvbnRhaW5lcik7XG4gICAgLy8gY29uc3QgYm9hcmRGYWtlID0gQm9hcmRGYWtlXG4gICAgLy8gY29uc29sZS5sb2coYm9hcmRGYWtlKVxuXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNjAwO1xuICAgIGNhbnZhcy53aWR0aCA9IDYwMDtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJncmVlblwiO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCA2MDAsIDYwMCk7XG5cbiAgICBjb25zdCBib2FyZCA9IG5ldyBDYW52YXNCb2FyZChudWxsLCBudWxsLCBudWxsLCA2MDAsIDYwMCk7XG4gICAgYm9hcmQuZHJhd0dyaWRMaW5lcyhjdHgpO1xuXG4gICAgY29uc3Qgc2FtcGxlQmFzaWNQdXp6bGUgPSBbNiwwLDAsMCwwLDgsMCwwLDAsMCwwLDAsNiwwLDAsOCwwLDksMCwwLDEsMywwLDAsMCwwLDAsMCwwLDYsMCwwLDQsMSwwLDUsMCwwLDAsMCwwLDAsMCwwLDAsOCwwLDQsNywwLDAsMywwLDAsMCwwLDAsMCwwLDcsMiwwLDAsMiwwLDMsMCwwLDksMCwwLDAsMCwwLDAsMSwwLDAsNywwLDZdO1xuICAgIGJvYXJkLmRyYXdQZW5NYXJrcyhjdHgsIHNhbXBsZUJhc2ljUHV6emxlKTtcblxuXG5cblxufSlcbiJdLCJuYW1lcyI6WyJCb2FyZEZha2UiLCJCb2FyZCIsIkNhbnZhc0JvYXJkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImJvYXJkIiwiZHJhd0dyaWRMaW5lcyIsInNhbXBsZUJhc2ljUHV6emxlIiwiZHJhd1Blbk1hcmtzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": function() { return /* binding */ Board; },\n/* harmony export */   \"BoardFake\": function() { return /* binding */ BoardFake; }\n/* harmony export */ });\nclass Board {\n  constructor(container) {\n    this.container = container;\n    this.loadBoard();\n  }\n\n  loadBoard() {\n    const gameBoard = document.createElement(\"div\");\n    gameBoard.classList.add(\"board\");\n\n    for (let i = 0; i < 9; i++) {\n      let sector = document.createElement(\"div\");\n      sector.classList.add(\"sector\");\n\n      for (let j = 0; j < 9; j++) {\n        let cell = document.createElement(\"div\");\n        cell.classList.add(\"cell\");\n        sector.appendChild(cell);\n      }\n\n      gameBoard.appendChild(sector);\n    }\n\n    this.container.appendChild(gameBoard);\n  }\n\n}\n;\nconst BoardFake = 'fake board class';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLEtBQU4sQ0FBWTtFQUNmQyxXQUFXLENBQUNDLFNBQUQsRUFBWTtJQUNuQixLQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtJQUNBLEtBQUtDLFNBQUw7RUFDSDs7RUFFREEsU0FBUyxHQUFHO0lBQ1IsTUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7SUFDQUYsU0FBUyxDQUFDRyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixPQUF4Qjs7SUFFQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7TUFDeEIsSUFBSUMsTUFBTSxHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtNQUNBSSxNQUFNLENBQUNILFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFFBQXJCOztNQUNBLEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtRQUN4QixJQUFJQyxJQUFJLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFYO1FBQ0FNLElBQUksQ0FBQ0wsU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CO1FBQ0FFLE1BQU0sQ0FBQ0csV0FBUCxDQUFtQkQsSUFBbkI7TUFDSDs7TUFDTFIsU0FBUyxDQUFDUyxXQUFWLENBQXNCSCxNQUF0QjtJQUNDOztJQUNELEtBQUtSLFNBQUwsQ0FBZVcsV0FBZixDQUEyQlQsU0FBM0I7RUFDSDs7QUFyQmM7QUFzQmxCO0FBRUQsTUFBTVUsU0FBUyxHQUFHLGtCQUFsQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9ib2FyZC5qcz9iY2IwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLmxvYWRCb2FyZCgpO1xuICAgIH07XG5cbiAgICBsb2FkQm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdhbWVCb2FyZC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRcIik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgc2VjdG9yLmNsYXNzTGlzdC5hZGQoXCJzZWN0b3JcIilcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgOTsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgICAgICAgICAgc2VjdG9yLmFwcGVuZENoaWxkKGNlbGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChzZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVCb2FyZCk7XG4gICAgfVxufTtcblxuY29uc3QgQm9hcmRGYWtlID0gJ2Zha2UgYm9hcmQgY2xhc3MnXG5leHBvcnQgeyBCb2FyZEZha2UgfVxuXG4iXSwibmFtZXMiOlsiQm9hcmQiLCJjb25zdHJ1Y3RvciIsImNvbnRhaW5lciIsImxvYWRCb2FyZCIsImdhbWVCb2FyZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImkiLCJzZWN0b3IiLCJqIiwiY2VsbCIsImFwcGVuZENoaWxkIiwiQm9hcmRGYWtlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

/***/ }),

/***/ "./src/scripts/canvas_board.js":
/*!*************************************!*\
  !*** ./src/scripts/canvas_board.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CanvasBoard\": function() { return /* binding */ CanvasBoard; }\n/* harmony export */ });\nclass CanvasBoard {\n  constructor(pencilMarks, penMarks, sumClues, gridWidth, gridHeight) {\n    this.penMarks = penMarks;\n    this.pencilMarks = pencilMarks;\n    this.sumClues = sumClues;\n    this.gridWidth = gridWidth;\n    this.gridHeight = gridHeight;\n  }\n\n  drawGridLines(ctx) {\n    console.log(\"drawing grid lines\");\n    ctx.beginPath();\n    ctx.rect(0, 0, this.gridWidth, this.gridHeight);\n    ctx.strokeStyle = \"black\";\n    ctx.lineWidth = 8;\n    ctx.stroke();\n\n    for (let i = 0; i < 9; i++) {\n      ctx.beginPath();\n      ctx.moveTo(0, this.gridHeight / 9 * i);\n      ctx.lineTo(this.gridWidth, this.gridHeight / 9 * i);\n      ctx.strokeStyle = \"black\";\n      ctx.lineWidth = 2;\n\n      if (i % 3 === 0) {\n        ctx.lineWidth = 4;\n      }\n\n      ;\n      ctx.stroke();\n      ctx.beginPath();\n      ctx.moveTo(this.gridWidth / 9 * i, 0);\n      ctx.lineTo(this.gridWidth / 9 * i, this.gridHeight);\n      ctx.strokeStyle = \"black\";\n      ctx.lineWidth = 2;\n\n      if (i % 3 === 0) {\n        ctx.lineWidth = 4;\n      }\n\n      ;\n      ctx.stroke();\n    }\n\n    ;\n  }\n\n  drawPenMarks(ctx, currentBoard) {\n    // for (let i = 0; i < 9; i++) {\n    //     for (let j = 0; j < 9; j++) {\n    //         ctx.font = '30px serif';\n    // ctx.fillText(`${j}`, (this.gridWidth / 9) * i + 25, (this.gridHeight / 9) * j + 45);\n    //     };\n    // };\n    let currIndex = 0;\n\n    for (let i = 0; i < 9; i++) {\n      for (let j = 0; j < 9; j++) {\n        if (currentBoard[currIndex] != 0) {\n          ctx.font = '30px serif';\n          ctx.fillText(`${currentBoard[currIndex]}`, this.gridWidth / 9 * i + 25, this.gridHeight / 9 * j + 45);\n        }\n\n        ;\n      }\n\n      ;\n    }\n\n    ;\n  }\n\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxHQUFpQixDQUFsQixHQUF1QlcsQ0FBdkIsR0FBMkIsRUFBdEUsRUFBMkUsS0FBS1YsVUFBTCxHQUFrQixDQUFuQixHQUF3QmdCLENBQXhCLEdBQTRCLEVBQXRHO1FBQ0g7O1FBQUE7TUFDSjs7TUFBQTtJQUNKOztJQUFBO0VBQ0o7O0FBdERvQjtBQXVEeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvY2FudmFzX2JvYXJkLmpzPzkyM2MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENhbnZhc0JvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihwZW5jaWxNYXJrcywgcGVuTWFya3MsIHN1bUNsdWVzLCBncmlkV2lkdGgsIGdyaWRIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5wZW5NYXJrcyA9IHBlbk1hcmtzO1xuICAgICAgICB0aGlzLnBlbmNpbE1hcmtzID0gcGVuY2lsTWFya3M7XG4gICAgICAgIHRoaXMuc3VtQ2x1ZXMgPSBzdW1DbHVlcztcbiAgICAgICAgdGhpcy5ncmlkV2lkdGggPSBncmlkV2lkdGg7XG4gICAgICAgIHRoaXMuZ3JpZEhlaWdodCA9IGdyaWRIZWlnaHQ7XG4gICAgfTtcblxuICAgIGRyYXdHcmlkTGluZXMoY3R4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHJhd2luZyBncmlkIGxpbmVzXCIpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5yZWN0KDAsIDAsIHRoaXMuZ3JpZFdpZHRoLCB0aGlzLmdyaWRIZWlnaHQpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA4O1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oMCwgKHRoaXMuZ3JpZEhlaWdodCAvIDkpICogaSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMuZ3JpZFdpZHRoLCAodGhpcy5ncmlkSGVpZ2h0IC8gOSkgKiBpKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgaWYgKGkgJSAzID09PSAwKSAgeyBjdHgubGluZVdpZHRoID0gNH07XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oKHRoaXMuZ3JpZFdpZHRoIC8gOSkgKiBpLCAwKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oKHRoaXMuZ3JpZFdpZHRoIC8gOSkgKiBpLCB0aGlzLmdyaWRIZWlnaHQpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgICAgICBpZiAoaSAlIDMgPT09IDApIHsgY3R4LmxpbmVXaWR0aCA9IDR9O1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBkcmF3UGVuTWFya3MoY3R4LCBjdXJyZW50Qm9hcmQpIHtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgOTsgaisrKSB7XG4gICAgICAgIC8vICAgICAgICAgY3R4LmZvbnQgPSAnMzBweCBzZXJpZic7XG4gICAgICAgICAgICAgICAgLy8gY3R4LmZpbGxUZXh0KGAke2p9YCwgKHRoaXMuZ3JpZFdpZHRoIC8gOSkgKiBpICsgMjUsICh0aGlzLmdyaWRIZWlnaHQgLyA5KSAqIGogKyA0NSk7XG4gICAgICAgIC8vICAgICB9O1xuICAgICAgICAvLyB9O1xuXG4gICAgICAgIGxldCBjdXJySW5kZXggPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDk7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Qm9hcmRbY3VyckluZGV4XSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5mb250ID0gJzMwcHggc2VyaWYnO1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoYCR7Y3VycmVudEJvYXJkW2N1cnJJbmRleF19YCwgKHRoaXMuZ3JpZFdpZHRoIC8gOSkgKiBpICsgMjUsICh0aGlzLmdyaWRIZWlnaHQgLyA5KSAqIGogKyA0NSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbn07XG4iXSwibmFtZXMiOlsiQ2FudmFzQm9hcmQiLCJjb25zdHJ1Y3RvciIsInBlbmNpbE1hcmtzIiwicGVuTWFya3MiLCJzdW1DbHVlcyIsImdyaWRXaWR0aCIsImdyaWRIZWlnaHQiLCJkcmF3R3JpZExpbmVzIiwiY3R4IiwiY29uc29sZSIsImxvZyIsImJlZ2luUGF0aCIsInJlY3QiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImkiLCJtb3ZlVG8iLCJsaW5lVG8iLCJkcmF3UGVuTWFya3MiLCJjdXJyZW50Qm9hcmQiLCJjdXJySW5kZXgiLCJqIiwiZm9udCIsImZpbGxUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/canvas_board.js\n");

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