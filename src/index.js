import { CanvasBoard } from './scripts/canvas_board'

document.addEventListener("DOMContentLoaded", ()=> {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext('2d');
    canvas.height = 600;
    canvas.width = 600;




    // Testing Sample Data
    const samplePenMarks = [6,0,0,0,0,8,0,0,0,0,0,0,6,0,0,8,0,9,0,0,1,3,0,0,0,0,0,0,0,6,0,0,4,1,0,5,0,0,0,0,0,0,0,0,0,8,0,4,7,0,0,3,0,0,0,0,0,0,0,7,2,0,0,2,0,3,0,0,9,0,0,0,0,0,0,1,0,0,7,0,6];

    const samplePencilMarks = [];
    for (let i = 0; i < 81; i++) {
        let cell = [];
        for (let j = 0; j < 9; j++) {
            cell.push(0)
        };
        samplePencilMarks.push(cell);
    };

    for (let i = 0; i < 9; i++) {
        samplePencilMarks[2][i] = i;
    };


    

    // Initial board load
    const board = new CanvasBoard(null, 9, 600, 600);
    board.highlightSelectedCell(ctx, 0);
    board.drawGridLines(ctx);
    board.drawPenMarks(ctx, samplePenMarks, samplePencilMarks);
    board.drawPencilMarks(ctx, samplePenMarks, samplePencilMarks)
    
    canvas.addEventListener("click", (e) => {
        console.log(e);
        let y = e.clientY - e.target.getBoundingClientRect().top;
        let x = e.clientX - e.target.getBoundingClientRect().left;
        console.log(board.getCellNumber(x, y));


    })

})
