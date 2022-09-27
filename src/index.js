import { CanvasBoard } from './scripts/canvas_board'
import { SampleInputs } from './scripts/sample_inputs';
import { Game } from './scripts/game';

document.addEventListener("DOMContentLoaded", ()=> {
    const description = document.querySelector("#description");
    const hideAndShowButton = document.querySelector("#hide-button");
    hideAndShowButton.addEventListener("click", (e) => {
        if (description.style.display === 'inline-block') {
            description.style.display = "none";
            hideAndShowButton.innerText = "Instructions";
        } else {
            description.style.display = "inline-block";
            hideAndShowButton.innerText = "Hide";
        };
    });







    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext('2d');

    if (window.screen.width < 500) {
        canvas.width = window.screen.width * .95;
        canvas.height = window.screen.width * .96;

        
    } else {
        canvas.height = 600;
        canvas.width = 600;
    }

    const sampleInputs = new SampleInputs();
    let board = new CanvasBoard(9, canvas.width, canvas.height, sampleInputs.puzzle1);
    let game = new Game(sampleInputs.puzzle1);
    const resetButton = document.querySelector("#reset-button");

    let selectedCell = 0;
    game.checkErrors();
    board.update(ctx, selectedCell, game.penMarks, game.pencilMarks, game.errors);

    const puzzleSelector = document.querySelector("#puzzle-select");
    puzzleSelector.addEventListener("change", (e) => {

        if (puzzleSelector.value === 'puzzle1') {
            board = new CanvasBoard(9, 600, 600, sampleInputs.puzzle1);
            game = new Game(sampleInputs.puzzle1);
            
        } else {
            board = new CanvasBoard(9, 600, 600, sampleInputs.puzzle2);
            game = new Game(sampleInputs.puzzle2); 
        } 
        game.clearPenMarks();
        game.clearPencilMarks();
        game.checkErrors();
        board.update(ctx, selectedCell, game.penMarks, game.pencilMarks, game.errors);
    })


    const themeSelect = document.querySelector("#theme-select");
    themeSelect.addEventListener("change", (e) => {
        board.theme = themeSelect.value;
        board.getColors();
        board.update(ctx, selectedCell, game.penMarks, game.pencilMarks, game.errors);
    })

    resetButton.addEventListener("click", () => {
        game.clearPenMarks();
        game.clearPencilMarks();
        game.checkErrors();
        board.update(ctx, selectedCell, game.penMarks, game.pencilMarks, game.errors);
    });



    const pencilPad = document.querySelector('#pencilPad');;
     console.log('pencilPad: ', pencilPad)
    const penPad = document.querySelector('#penPad');;

    for (let i = 0; i < 9; i++) {
        let penButton = document.createElement('button');
        let pencilButton = document.createElement('button');
        penButton.innerText = i +  1
        pencilButton.innerText = i + 1
        penButton.classList.add('numButton');
        pencilButton.classList.add('numButton');
        penPad.appendChild(penButton);
        pencilPad.appendChild(pencilButton);

    }

    pencilPad.addEventListener('click', (e) => {
        if (game.pencilMarks[selectedCell][parseInt(e.target.innerText) - 1] === -1) {
            game.pencilMarks[selectedCell][parseInt(e.target.innerText) - 1] = parseInt(e.target.innerText - 1);
        } else {
            game.pencilMarks[selectedCell][parseInt(e.target.innerText) - 1] = -1;
        };
        game.checkErrors();
        board.update(ctx, selectedCell, game.penMarks, game.pencilMarks, game.errors);
    });

    penPad.addEventListener('click', (e) => {
        if (game.penMarks[selectedCell] === parseInt(e.target.innerText)){
            game.penMarks[selectedCell] = 0;

        } else {
            game.penMarks[selectedCell] = parseInt(e.target.innerText);
        }

        game.checkErrors();
        board.update(ctx, selectedCell, game.penMarks, game.pencilMarks, game.errors);
    });


    canvas.addEventListener("click", (e) => {
        let y = e.clientY - e.target.getBoundingClientRect().top;
        let x = e.clientX - e.target.getBoundingClientRect().left;
        selectedCell = board.getCellNumber(x, y);

        game.checkErrors();
        board.update(ctx, selectedCell, game.penMarks, game.pencilMarks, game.errors);
    });

    document.addEventListener("keydown", (e) => {
        if (selectedCell != null) {
            if (!isNaN(parseInt(e.key))) {
                if (parseInt(e.key) === game.penMarks[selectedCell]) {
                    game.penMarks[selectedCell] = 0;

                } else {
                    game.penMarks[selectedCell] = parseInt(e.key);
                };
            } else if (e.key === 'Backspace') {
                game.penMarks[selectedCell] = 0;
                for (let i = 0; i < 9; i++) {
                    game.pencilMarks[selectedCell][i] = -1;
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
                if (game.pencilMarks[selectedCell][shiftMaps[e.key] - 1] === -1) {
                    game.pencilMarks[selectedCell][shiftMaps[e.key] -1] = shiftMaps[e.key] - 1;
                } else {
                    game.pencilMarks[selectedCell][shiftMaps[e.key] - 1] = -1;
                };
            };
        };
        game.checkErrors();
        board.update(ctx, selectedCell, game.penMarks, game.pencilMarks, game.errors);
    });
});
