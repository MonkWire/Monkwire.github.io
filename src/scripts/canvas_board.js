export class CanvasBoard {
    constructor(boardSize, gridWidth, gridHeight, sumGroups) {
        this.boardSize = boardSize;
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
        this.sumGroups = sumGroups;
        this.sumClues = [];
        this.walls = [];
        this.colors = [];
        this.selectColor = '#d9d3c9';
        this.theme = 'none';
    };

    update(ctx, selectedCell, penMarks, pencilMarks, errors) {
        this.drawBackground(ctx);
        this.drawColors(ctx);
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
        ctx.setLineDash([]);

        for (let i = 1; i < this.boardSize; i++) {
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
                                ctx.fillText(`${pencilMarkings[currIndex][pencilIndex] + 1}`, (this.gridWidth / 9) * j + (r * 15) + 15, (this.gridHeight / 9) * i + (c * 15) + 25);
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
                    ctx.fillStyle = this.selectColor;
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
                ctx.beginPath();
                ctx.setLineDash([5, 5]);
                ctx.strokeStyle = 'grey';
                if (this.walls[currIndex].n) {
                    ctx.moveTo((this.gridWidth / 9 * j) + 7, (this.gridHeight / 9 * i) + 7)
                    ctx.lineTo((((this.gridWidth / 9) * j) + (this.gridWidth / 9) - 7), (((this.gridWidth / 9) * i) + 7))
                }

                if (this.walls[currIndex].e) {
                    ctx.moveTo(((this.gridWidth / 9 * j) + (this.gridWidth / 9)) - 7, ((this.gridHeight / 9) * i) + 7)
                    ctx.lineTo((((this.gridWidth / 9) * j) + (this.gridWidth / 9) - 7), (((this.gridHeight / 9) * i) + ((this.gridHeight / 9)) - 7))
                }

                if (this.walls[currIndex].s) {
                    ctx.moveTo((this.gridWidth / 9 * j) + 7, (this.gridHeight / 9 * i) + ((this.gridHeight / 9) - 7))
                    ctx.lineTo((((this.gridWidth / 9) * j) + (this.gridWidth / 9)) - 7, (((this.gridHeight / 9) * i) + (this.gridHeight / 9) - 7))
                }

                if (this.walls[currIndex].w) {
                    ctx.moveTo(((this.gridWidth / 9 * j) + 7), ((this.gridHeight / 9) * i) + 7)
                    ctx.lineTo((((this.gridWidth / 9) * j) + 7), (((this.gridHeight / 9) * i) + ((this.gridHeight / 9)) - 7))
                }
                ctx.stroke();
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
                        ctx.fillStyle = this.selectColor;
                    } else {
                        ctx.fillStyle = this.colors[currIndex];
                    };

                    ctx.fillRect((this.gridWidth / 9) * j, ((this.gridHeight / 9) * i), 23, 20);
                    ctx.font = '17px serif';
                    ctx.fillStyle = 'rgb(189, 17, 17)';
                    ctx.fillText(`${this.sumClues[currIndex]}`, ((this.gridWidth / 9) * j) + 5, ((this.gridHeight / 9) * i) + 17);
                };
                currIndex++;
            };
        };
    };

    getColors() {
        let colors = [];

        if (this.theme === 'none') {
            colors = ['white'];
            this.selectColor = '#d9d3c9';
        } else if (this.theme === 'random') {
            for (let i = 0; i < 100; i++) {
                colors.push(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
            };
            this.selectColor = 'white';
        } else if (this.theme === 'pastel') {
            colors = ['#fbf8cc', '#fde4cf', '#ffcfd2', '#f1c0e8', '#cfbaf0', '#a3c4f3', '#90dbf4', '#8eecf5', '#98f5e1', '#b9fbc0'];
            this.selectColor = 'white';
        } else if (this.theme === 'greyscale') {
            this.selectColor = 'white';
            colors = ['#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#B8B5BA', '#AEABB0', '#E1DFE1', '#C2C0C4', '#D7D5D7'];
        }

        let cellColors = new Array(81).fill(0);

        for (let i = 0; i < this.sumGroups.length; i++) {
            // let color = 'white'
            let color = colors[Math.floor(Math.random() * colors.length)];
            // let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
            for (let j = 0; j < this.sumGroups[i].cells.length; j++) {
                cellColors[this.sumGroups[i].cells[j]] = color;
            };
        };
        this.colors = cellColors;
    };


    drawColors(ctx) {
        if (this.colors.length === 0) {
            this.getColors();
        }

        let currIndex = 0;
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                ctx.fillStyle = this.colors[currIndex];
                ctx.fillRect(((this.gridWidth / 9) * j), ((this.gridHeight / 9) * i), this.gridHeight / 9, this.gridWidth / 9);
                currIndex++;
            };
        };
    };

    getCorners() {
        if (this.walls.length === 0) {
            this.getWalls();
        };

        let corners = [];

        for (let i = 0; i < 81; i++) {
            let corner = {ne: false, se: false, sw: false, nw: false};
            adjacent = this.getAdjacentCells(i);

            if (0 <= this.walls.n < 81 && !this.walls[adjacent.n].s) {
                if (this.walls[adjacent.n].e) {
                    if (0 <= this.walls.e < 81 && !this.walls[adjacent.e].w) {
                        if (this.walls[adjacent.e].n) {
                            corners.ne = true;
                        };
                    };
                };
            };
            if (0 <= this.walls.s < 81 && !this.walls[adjacent.s].n) {
                if (this.walls[adjacent.s].e) {
                    if (0 <= this.walls.e < 81 && !this.walls[adjacent.e].w) {
                        if (this.walls[adjacent.e].s) {
                            corners.se = true;
                        };
                    };
                };
            };
            if (0 <= this.walls.n < 81 && !this.walls[adjacent.n].s) {
                if (this.walls[adjacent.n].w) {
                    if (0 <= this.walls.w < 81 && !this.walls[adjacent.w].e) {
                        if (this.walls[adjacent.w].n) {
                            corners.nw = true;
                        };
                    };
                };
            };
            if (0 <= this.walls.s < 81 && !this.walls[adjacent.s].n) {
                if (this.walls[adjacent.s].w) {
                    if (0 <= this.walls.w < 81 && !this.walls[adjacent.w].e) {
                        if (this.walls[adjacent.w].s) {
                            corners.sw = true;
                        };
                    };
                };
            };
        };
    };

    drawCorners(ctx) {
        console.log('drawCorners func')
        console.log('corners: ', this.corners);

    }
};
