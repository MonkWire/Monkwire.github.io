import { CanvasBoard } from './scripts/canvas_board'
import { SampleInputs } from './scripts/sample_inputs';
import { Game } from './scripts/game';

document.addEventListener("DOMContentLoaded", ()=> {
    const description = document.querySelector("#description");
    const hideAndShowButton = document.querySelector("#hide-button");
    hideAndShowButton.addEventListener("click", (e) => {
        console.log(e)
        if (description.style.display === 'none') {
            description.style.display = "inline-block";
            hideAndShowButton.innerText = "Hide";
        } else {
            description.style.display = "none";
            hideAndShowButton.innerText = "Show";
        };
    });

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext('2d');
    canvas.height = 600;
    canvas.width = 600;

    const sampleInputs = new SampleInputs();
    const board = new CanvasBoard(9, 600, 600, sampleInputs.sampleGroups);
    const game = new Game(null);
    game.penMarks = sampleInputs.penErrors;
    console.log('error testing: ');
    // console.log(testGame.getRowErrors())
    // console.log(testGame.getRowErrors().length)

    let selectedCell = 0;
    let penMarks = game.penMarks;
    let pencilMarks = sampleInputs.samplePencilMarks;

    game.checkErrors();
    board.update(ctx, selectedCell, penMarks, pencilMarks, game.errors);

    canvas.addEventListener("click", (e) => {
        let y = e.clientY - e.target.getBoundingClientRect().top;
        let x = e.clientX - e.target.getBoundingClientRect().left;
        selectedCell = board.getCellNumber(x, y);

        game.checkErrors();
        board.update(ctx, selectedCell, penMarks, pencilMarks, game.errors);
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
                for (let i = 0; i < 9; i++) {
                    pencilMarks[selectedCell][i] = -1;
                }
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
        game.checkErrors();
        board.update(ctx, selectedCell, penMarks, pencilMarks, game.errors);
    });
});
