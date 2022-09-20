export class CanvasBoard {
    constructor(boardSize, gridWidth, gridHeight, sumGroups) {
        this.boardSize = boardSize;
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
        this.sumGroups = sumGroups;
        this.sumClues = [];
        this.walls = [];
    };

    update(ctx, selectedCell, penMarks, pencilMarks, errors) {
        this.drawBackground(ctx);
        if (selectedCell != null) {
            this.highlightSelectedCell(ctx, selectedCell);
        };
        this.drawSumsOvelay(ctx);
        this.drawSumClues(ctx, selectedCell);
        this.drawGridLines(ctx);
        this.drawPenMarks(ctx, penMarks, errors);
        this.drawPencilMarks(ctx, penMarks, pencilMarks);
    }

    drawBackground(ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, this.gridWidth, this.gridHeight);
    }

    drawGridLines(ctx) {
        ctx.beginPath();
        ctx.rect(0, 0, this.gridWidth, this.gridHeight);
        ctx.setLineDash([]);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 8;
        ctx.stroke();

        for (let i = 0; i < this.boardSize; i++) {
            ctx.beginPath();
            ctx.moveTo(0, (this.gridHeight / this.boardSize) * i);
            ctx.lineTo(this.gridWidth, (this.gridHeight / this.boardSize) * i);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            if (i % 3 === 0) { ctx.lineWidth = 4 };
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo((this.gridWidth / this.boardSize) * i, 0);
            ctx.lineTo((this.gridWidth / this.boardSize) * i, this.gridHeight);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            if (i % 3 === 0) { ctx.lineWidth = 4 };
            ctx.stroke();
        };
    };

    drawPenMarks(ctx, penMarkings, errors) {
        console.log('in draw pen parks, errors; ', errors);
        let currIndex = 0;

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (penMarkings[currIndex] != 0) {
                    ctx.font = '30px serif';
                    ctx.fillStyle = 'black';
                    if (errors[currIndex]) {
                        ctx.fillStyle = 'rgb(189, 17, 17)';
                    }
                    ctx.fillText(`${penMarkings[currIndex]}`, (this.gridWidth / 9) * j + 25, (this.gridHeight / 9) * i + 45);
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
                            if (pencilMarkings[currIndex][pencilIndex] != -1) {
                                ctx.font = '15px serif';
                                ctx.fillStyle = "black";
                                ctx.fillText(`${pencilMarkings[currIndex][pencilIndex] + 1}`, (this.gridWidth / 9) * j + (r * 20) + 10, (this.gridHeight / 9) * i + (c * 20) + 20);
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
                    ctx.rect(this.gridHeight / 9 * j, this.gridWidth / 9 * i, this.gridHeight / 9, this.gridWidth / 9);
                    ctx.fillStyle = "#d9d3c9";
                    ctx.fill();
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
                if ((((this.gridHeight / this.boardSize) * j) < x) && (x < ((this.gridHeight / this.boardSize * j) + (this.gridHeight / this.boardSize)))) {
                    if (((this.gridWidth / this.boardSize * i) < y) && ((y < (this.gridWidth / this.boardSize * i) + (this.gridWidth / this.boardSize)))) {
                        return currIndex;
                    };
                };


                currIndex++;
            };
        };
    };

    getAdjacentCells(index) {
        let north = index - this.boardSize;
        let east = index + 1;
        let south = index + this.boardSize;
        let west = index - 1;
        const adjacent = { n: north, e: east, s: south, w: west };

        return adjacent;

    };

    getWalls() {
        const walls = [];

        for (let i = 0; i < this.boardSize ** 2; i++) {
            walls.push({ n: false, e: false, s: false, w: false });
        }

        // const walls = new Array(81).fill().map((x) => ({n: false, e: false, s: false, w: false});

        for (let i = 0; i < this.sumGroups.length; i++) {
            for (let j = 0; j < this.sumGroups[i].cells.length; j++) {
                const adjacentInclude = (dir) => {
                    return !this.sumGroups[i].cells.includes(dir);
                };
                let adjacentCells = this.getAdjacentCells(this.sumGroups[i].cells[j]);
                if (adjacentInclude(adjacentCells.n)) {
                    walls[this.sumGroups[i].cells[j]].n = true;
                };
                if (adjacentInclude(adjacentCells.e)) {
                    walls[this.sumGroups[i].cells[j]].e = true;
                };
                if (adjacentInclude(adjacentCells.s)) {
                    walls[this.sumGroups[i].cells[j]].s = true;
                };
                if (adjacentInclude(adjacentCells.w)) {
                    walls[this.sumGroups[i].cells[j]].w = true;
                };
            };
        };
        return walls;
    };



    drawSumsOvelay(ctx) {
        if (this.walls.length === 0) {
            this.walls = this.getWalls()
        }

        let currIndex = 0;
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (this.walls[currIndex].n) {
                    ctx.beginPath();
                    ctx.setLineDash([5, 5]);
                    ctx.strokeStyle = 'grey';
                    ctx.moveTo((this.gridWidth / 9 * j) + 7, (this.gridHeight / 9 * i) + 7)
                    ctx.lineTo((((this.gridWidth / 9) * j) + (this.gridWidth / 9) - 7), (((this.gridWidth / 9) * i) + (7)))
                    ctx.stroke();
                };

                if (this.walls[currIndex].e) {
                    ctx.beginPath();
                    ctx.setLineDash([5, 5]);
                    ctx.strokeStyle = 'grey';
                    ctx.moveTo(((this.gridWidth / 9 * j) + (this.gridWidth / 9)) - 7, ((this.gridHeight / 9) * i) + 7)
                    ctx.lineTo((((this.gridWidth / 9) * j) + (this.gridWidth / 9) - 7), (((this.gridHeight / 9) * i) + ((this.gridHeight / 9)) - 7))
                    ctx.stroke();
                };

                if (this.walls[currIndex].s) {
                    ctx.beginPath();
                    ctx.setLineDash([5, 5]);
                    ctx.strokeStyle = 'grey';
                    ctx.moveTo((this.gridWidth / 9 * j) + 7, (this.gridHeight / 9 * i) + ((this.gridHeight / 9) - 7))
                    ctx.lineTo((((this.gridWidth / 9) * j) + (this.gridWidth / 9)) - 7, (((this.gridHeight / 9) * i) + (this.gridHeight / 9) - 7))
                    ctx.stroke();
                };

                if (this.walls[currIndex].w) {
                    ctx.beginPath();
                    ctx.setLineDash([5, 5]);
                    ctx.strokeStyle = 'grey';
                    ctx.moveTo(((this.gridWidth / 9 * j) + 7), ((this.gridHeight / 9) * i) + 7)
                    ctx.lineTo((((this.gridWidth / 9) * j) + 7), (((this.gridHeight / 9) * i) + ((this.gridHeight / 9)) - 7))
                    ctx.stroke();
                };
                currIndex++;
            };
        };
    };

    drawSumClues(ctx, selectedCell) {
        if (this.sumClues.length === 0) {
            this.sumClues = new Array(81).fill(0)
            for (let i = 0; i < this.sumGroups.length; i++) {
                this.sumClues[this.sumGroups[i].cells[0]] = this.sumGroups[i].sum;
            };
        };


        let currIndex = 0;
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (this.sumClues[currIndex] != 0) {
                    if (selectedCell != null && currIndex === selectedCell) {
                        ctx.fillStyle = '#d9d3c9';
                    } else {
                        ctx.fillStyle = 'white';
                    };

                    ctx.fillRect((this.gridWidth / 9) * j, ((this.gridHeight / 9) * i), 17, 17);
                    ctx.font = '10px serif';
                    ctx.fillStyle = 'rgb(189, 17, 17)';
                    ctx.fillText(`${this.sumClues[currIndex]}`, ((this.gridWidth / 9) * j) + 5, ((this.gridHeight / 9) * i) + 15);
                };
                currIndex++;
            };
        };
    };
};
