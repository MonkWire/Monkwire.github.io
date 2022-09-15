export class Board {
    constructor(container) {
        this.container = container;
        this.loadBoard();
    };

    loadBoard() {
        const gameBoard = document.createElement("div");
        gameBoard.classList.add("board");

        for (let i = 0; i < 9; i++) {
            let sector = document.createElement("div");
            sector.classList.add("sector")
            for (let j = 0; j < 9; j++) {
                let cell = document.createElement("div");
                cell.classList.add("cell");
                sector.appendChild(cell)
            }
        gameBoard.appendChild(sector);
        }
        this.container.appendChild(gameBoard);
    }
};

const BoardFake = 'fake board class'
export { BoardFake }

