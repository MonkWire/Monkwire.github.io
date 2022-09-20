export class Game {
    constructor(gridSize=81, sumGroups) {
        this.penMarks = new Array(gridSize).fill(0);
        this.pencilMarks = new Array(gridSize).fill(0);
        this.errors = new Array(gridSize).fill(false);
        this.sumGroups = sumGroups;
    };

    checkRow(row) {
        let counts = {};
        let seen = [];

        for (let i = 0; i < row.length; i++) {
            if (seen.includes(row[i])) {
                counts[row[i]] += 1;
            } else {
                seen.push(row[i]);
                counts[row[i]] = 1;
            };
        };

        let rowErrors = [];
        for (let i = 0; i < row.length; i++) {
            if (counts[row[i]] > 1) {
                rowErrors.push(true);
            } else {
                rowErrors.push(false);
            };
        };

        return rowErrors;
    };

    checkRows() {
        let rows = [];
        let currIndex = [];
        rowErrors = [];

        for (let i = 0; i < Math.sqrt(this.gridSize); i++) {
            for (let j = 0; j < Math.sqrt(this.gridSize); j++) {
                if (Math.floor(j / Math.sqrt(this.gridSize) > i)) {
                    rowErrors.concat(this.checkRow(row));
                    row = [];
                };
                row.push(this.penMarks[currIndex]);
                currIndex++;
            };

        };

    };
};