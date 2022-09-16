export class CanvasBoard {
    constructor(sumClues, boardSize, gridWidth, gridHeight) {
        this.sumClues = sumClues;
        this.boardSize = boardSize;
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
    };

    drawGridLines(ctx) {
        ctx.beginPath();
        ctx.rect(0, 0, this.gridWidth, this.gridHeight);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 8;
        ctx.stroke();

        for (let i = 0; i < this.boardSize; i++) {
            ctx.beginPath();
            ctx.moveTo(0, (this.gridHeight / this.boardSize) * i);
            ctx.lineTo(this.gridWidth, (this.gridHeight / this.boardSize) * i);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            if (i % 3 === 0)  { ctx.lineWidth = 4};
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo((this.gridWidth / this.boardSize) * i, 0);
            ctx.lineTo((this.gridWidth / this.boardSize) * i, this.gridHeight);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            if (i % 3 === 0) { ctx.lineWidth = 4};
            ctx.stroke();
        };
    };

    drawPenMarks(ctx, penMarkings) {
        let currIndex = 0;

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (penMarkings[currIndex] != 0) {
                    ctx.font = '30px serif';
                    ctx.fillStyle = 'black';
                    ctx.fillText(`${penMarkings[currIndex]}`, (this.gridWidth / 9) * i + 25, (this.gridHeight / 9) * j + 45);
                };
                currIndex++
            };
        };
    };

    drawPencilMarks(ctx, penMarkings, pencilMarkings) {
        let currIndex = 0;

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (penMarkings[currIndex] === 0) {
                    let pencilIndex = 0;
                    for (let c = 0; c < 3; c++) {
                        for (let r = 0; r < 3; r++) {
                           if (pencilMarkings[currIndex][pencilIndex] != 0) {
                               ctx.font = '15px serif';
                               ctx.fillStyle = "black";
                               ctx.fillText(`${pencilMarkings[currIndex][pencilIndex] + 1}`, (this.gridWidth / 9) * i + (r * 20) + 10, (this.gridHeight / 9) * j + (c * 20) + 20);
                           };
                           pencilIndex++;
                        };
                    };
                };
            currIndex++;
            };
        };
    };

    highlightSelectedCell(ctx, cellNumber) {
        let currIndex = 0;

        for (let i = 0; i < this.boardSize; i++) {
            for (let j = 0; j < this.boardSize; j++) {
                if (currIndex === cellNumber) {
                    ctx.rect(this.gridWidth / 9 * i, this.gridHeight / 9 * j, this.gridWidth / 9, this.gridHeight / 9);
                    ctx.fillStyle = "#d9d3c9";
                    ctx.fill();
                    console.log('filled')
                } else if (currIndex > cellNumber) {
                    break;
                };

                currIndex++;
            }
        }
    }

    getCellNumber(x, y) {
        let currIndex = 0;
        for (let i = 0; i < this.boardSize; i++) {
            for (let j = 0; j < this.boardSize; j++) {
                if ((((this.gridWidth / this.boardSize) * i) < x) && (x < ((this.gridWidth / this.boardSize * i) + (this.gridWidth / this.boardSize)))) {
                    if (((this.gridHeight / this.boardSize * j) < y) && ((y < (this.gridHeight / this.boardSize * j) + (this.gridHeight / this.boardSize)))) {
                        return currIndex;
                    }
                }

                console.log(`gWidth: ${this.gridWidth / this.boardSize * i} - ${(this.gridWidth / this.boardSize * i) + (this.gridWidth / this.boardSize)}`)
                console.log(`gHeight: ${this.gridHeight / this.boardSize * j} - ${(this.gridHeight / this.boardSize * j) + (this.gridHeight / this.boardSize)}`)
                console.log(`currIndex: ${currIndex}, i: ${i}, j: ${j}`);
                console.log(`x, y: ${x} ${y}`)
                
                currIndex++;
            }
        }
    }
};
