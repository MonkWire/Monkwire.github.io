import { BoardFake } from './scripts/board';
import { Board } from './scripts/board';

document.addEventListener("DOMContentLoaded", ()=> {
    const boardContainer = document.querySelector("#board-container");
    const gameBoard =  new Board(boardContainer);
    const boardFake = BoardFake
    console.log(boardFake)
})
