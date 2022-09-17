import { CanvasBoard } from './scripts/canvas_board'

document.addEventListener("DOMContentLoaded", ()=> {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext('2d');
    canvas.height = 600;
    canvas.width = 600;




    // Testing Sample Data
    // const samplePenMarks = [6,0,0,0,0,8,0,0,0,0,0,0,6,0,0,8,0,9,0,0,1,3,0,0,0,0,0,0,0,6,0,0,4,1,0,5,0,0,0,0,0,0,0,0,0,8,0,4,7,0,0,3,0,0,0,0,0,0,0,7,2,0,0,2,0,3,0,0,9,0,0,0,0,0,0,1,0,0,7,0,6];


    const samplePenMarks = [];
    for (let i = 0; i < 81; i++) {
        samplePenMarks.push(i);
    };
    // const sampleGroups = [[11, [0, 9, 10, 11, 12]], [25, [1, 2, 3, 4]], [14, [4, 13]], [9, [5, 6]], ]]


    const samplePencilMarks = [];
    for (let i = 0; i < 81; i++) {
        let cell = [];
        for (let j = 0; j < 9; j++) {
            cell.push(-1)
        };
        samplePencilMarks.push(cell);
    };

    for (let i = 0; i < 9; i++) {
        samplePencilMarks[2][i] = i;
    };


    

    // Initial board load
    const board = new CanvasBoard(null, 9, 600, 600);
    board.update(ctx, null, samplePenMarks, samplePencilMarks);

    canvas.addEventListener("click", (e) => {
        let y = e.clientY - e.target.getBoundingClientRect().top;
        let x = e.clientX - e.target.getBoundingClientRect().left;
        let cellNum = board.getCellNumber(x, y);

        board.update(ctx, cellNum, samplePenMarks, samplePencilMarks);
    });


});
