import { CanvasBoard } from './scripts/canvas_board'
import { SampleInputs } from './scripts/sample_inputs';

document.addEventListener("DOMContentLoaded", ()=> {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext('2d');
    canvas.height = 600;
    canvas.width = 600;
    const sampleInputs = new SampleInputs();
    const board = new CanvasBoard(null, 9, 600, 600, sampleInputs.sampleGroups);


    board.update(ctx, null, sampleInputs.samplePenMarks, sampleInputs.samplePencilMarks);

    canvas.addEventListener("click", (e) => {
        let y = e.clientY - e.target.getBoundingClientRect().top;
        let x = e.clientX - e.target.getBoundingClientRect().left;
        let cellNum = board.getCellNumber(x, y);

        board.update(ctx, cellNum, sampleInputs.samplePenMarks, sampleInputs.samplePencilMarks);
    });
});
