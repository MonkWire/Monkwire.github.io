# Killer Sudoku Player

## About Sudoku
 **_Sudoku_** is a puzzle game typically played on a 9 x 9 board. A board can be broken into 9 rows, 9 columns, or 9 (3 x 3) squares, each containing 9 cells. A sudoku board is completed when every cell is filled such that no numbers are repeated within a square, column, or row.

**_Killer Sudoku_** is a variant of Sudoku that introduces the additional constraint of *sum groups*. A sum group is a group of non-repeating cells which add up to a specified sum. These sum groups are represented visually with an overlay of dashed lines and red sums. Complete the puzzle by fully filling the board with integers from 1 to 9, such that all rows, columns, squares, and sum groups are populated with non-repeating numbers.

## Gameplay
A live link to the player can be found [here](https://monkwire3.github.io).
Select a cell with the mouse, or by using the arrow keys; the selected cell will be highlighted. You can enter a pen marking by first selecting the cell you wish to mark, then using the keyboard to input a number. 
Pencil markings are added in the same way, except with the Shift key depressed. 
Error checking is only applied to pen marks, as pencil marks are completely ignored by the game. Each row, column, square, and sum group is checked for repeating numbers. Cells that violate the uniqueness constraint are highlighted in red.
To remove a pencil or pen marking, re-input that marking while the appropriate cell is selected. Alternatively, press the Backspace key to remove all pencil and pen markings from the selected cell.

![Example Puzzle](/assets/PuzzleGraphic.png)


## Technologies
This application is was built using [Node.js](https://nodejs.org/en/) and [Webpack](https://webpack.js.org/).

## Technical Implementation
The board is rendered using a canvas element, and updated anytime a 'click' or 'keydown' event listener is fired. The code in this project is designed to be scalable. A CanvasBoard class is responsible for rending all graphics. All CanvasBoard functions are designed to interact with one-dimensional arrays that are the size of the puzzle grid. Because the CanvasBoard is always aware of the dimensions of the canvas element and the number of cells per row/column, it is possible to mathmatically determine the location of all elements, regardless of puzzle or canvas size.

![CanvasBoard update code](/assets/canvasUpdateCode.png)

A Game class manages all user marks and error checking. The game Class conveys all errors to the Canvas element in the form of a single one-dimensional array of booleans, with a length equal to the number of cells in on the board. 

![Game error checking code](/assets/checkErrorsCode.png)

## Future Updates
Currently the puzzles are not auto-generated. Future updates will feature a functional solver and generator. The preloaded puzzles are from [Krazydad.com](https://krazydad.com/killersudoku/).

