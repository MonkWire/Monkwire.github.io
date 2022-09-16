import { BoardFake } from './scripts/board';
import { Board } from './scripts/board';
import { CanvasBoard } from './scripts/canvas_board'

document.addEventListener("DOMContentLoaded", ()=> {
    // const boardContainer = document.querySelector("#board-container");
    // const gameBoard =  new Board(boardContainer);
    // const boardFake = BoardFake
    // console.log(boardFake)

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext('2d');
    canvas.height = 600;
    canvas.width = 600;
    // ctx.fillStyle = "green";
    // ctx.fillRect(0, 0, 600, 600);

    const board = new CanvasBoard(null, null, null, 600, 600);
    board.drawGridLines(ctx);

    const sampleBasicPuzzle = [6,0,0,0,0,8,0,0,0,0,0,0,6,0,0,8,0,9,0,0,1,3,0,0,0,0,0,0,0,6,0,0,4,1,0,5,0,0,0,0,0,0,0,0,0,8,0,4,7,0,0,3,0,0,0,0,0,0,0,7,2,0,0,2,0,3,0,0,9,0,0,0,0,0,0,1,0,0,7,0,6];
    board.drawPenMarks(ctx, sampleBasicPuzzle);




})
