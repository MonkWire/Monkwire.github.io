export class Game {
    constructor(sumGroups, gridSize=81) {
        this.gridSize = gridSize;
        this.penMarks = new Array(gridSize).fill(0);
        this.pencilMarks = new Array(gridSize).fill(-1);
        this.errors = new Array(gridSize).fill(false);
        this.sumGroups = sumGroups;
    };

    checkGroup(group) {
        let counts = {};
        let seen = [];

        for (let i = 0; i < group.length; i++) {
            if (seen.includes(group[i])) {
                counts[group[i]] += 1;
            } else {
                seen.push(group[i]);
                counts[group[i]] = 1;
            };
        };

        let groupErrors = [];
        for (let i = 0; i < group.length; i++) {
            if (counts[group[i]] > 1) {
                groupErrors.push(true);
            } else {
                groupErrors.push(false);
            };
        };


        return groupErrors;
    };

    getRowErrors() {
        let rowErrors = [];

        let currIndex = 0;
        for (let i = 0; i < Math.sqrt(this.gridSize); i++) {
            let row = [];
            for (let j = 0; j < Math.sqrt(this.gridSize); j++) {
                row.push(this.penMarks[currIndex]);
                currIndex++;
            };

            let currRowErrors = this.checkGroup(row);
            for (let j = 0; j < currRowErrors.length; j++) {
                rowErrors.push(currRowErrors[j])
            }
        };

        return rowErrors;
    };

    


    getColumnErrors() {
        let currIndex = 0;
        let colErrors = [];
        let col = [];

        for (let i = 0; i < Math.sqrt(this.gridSize); i++) {
            for (let j = 0; j < Math.sqrt(this.gridSize); j++) {
                if (j % Math.sqrt(this.gridSize) === 0) {
                    colErrors.concat(this.checkGroup(col));
                    col = [];
                };

                col.push(this.penMarks[currIndex]);
                currIndex++;
            };
        };

        let transposedColErrors = new Array(this.gridSize).fill(0);

        indexA = 0;
        indexB = 0;
        for (let i = 0; i < Math.sqrt(this.gridSize); i++) {
            for (let j = 0; j < Math.sqrt(this.gridSize); j++) {
                indexA++;
            }

        }
        return transposedColErrors;
    };
};

