import { CanvasBoard } from './scripts/canvas_board'
import { SampleInputs } from './scripts/sample_inputs';

document.addEventListener("DOMContentLoaded", ()=> {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext('2d');
    canvas.height = 600;
    canvas.width = 600;

    const sampleInputs = new SampleInputs();
    const board = new CanvasBoard(9, 600, 600, sampleInputs.sampleGroups);

    let selectedCell = null;
    let penMarks = sampleInputs.blankPenMarks;
    let pencilMarks = sampleInputs.samplePencilMarks;

    board.update(ctx, selectedCell, penMarks, pencilMarks);

    canvas.addEventListener("click", (e) => {
        let y = e.clientY - e.target.getBoundingClientRect().top;
        let x = e.clientX - e.target.getBoundingClientRect().left;
        selectedCell = board.getCellNumber(x, y);

        board.update(ctx, selectedCell, penMarks, pencilMarks);
    });

    document.addEventListener("keydown", (e) => {
        if (selectedCell != null) {
            if (!isNaN(parseInt(e.key))) {
                if (parseInt(e.key) === penMarks[selectedCell]) {
                    penMarks[selectedCell] = 0;

                } else {
                    penMarks[selectedCell] = parseInt(e.key);
                };
            } else if (e.key === 'Backspace') {
                penMarks[selectedCell] = 0;
            } else if (e.key === 'ArrowLeft') {
                if (selectedCell % 9 != 0) {
                    selectedCell--;
                }
            } else if (e.key === 'ArrowUp') {
                if (selectedCell > 8) {
                    selectedCell -= 9;
                };
            } else if (e.key === 'ArrowRight') {
                if (selectedCell % 9 != 8) {
                    selectedCell++;
                };
            } else if (e.key === 'ArrowDown') {
                if (selectedCell < 72) {
                    selectedCell += 9;
                };
            } else if (['!', '@', '#', '$', '%', '^', '&', '*', '('].includes(e.key)) {
                const shiftMaps = {['!']: 1, ['@']: 2, ['#']: 3, ['$']: 4, ['%']: 5, ['^']: 6, ['&']: 7, ['*']: 8, ['(']: 9 };
                if (pencilMarks[selectedCell][shiftMaps[e.key] - 1] === -1) {
                    pencilMarks[selectedCell][shiftMaps[e.key] -1] = shiftMaps[e.key] - 1;
                } else {
                    pencilMarks[selectedCell][shiftMaps[e.key] - 1] = -1;
                };
            };
        };
        board.update(ctx, selectedCell, penMarks, pencilMarks);
    });
});
