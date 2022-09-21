export class Game {
    constructor(sumGroups, gridSize=81) {
        this.gridSize = gridSize;
        this.penMarks = new Array(gridSize).fill(0);
        this.pencilMarks = new Array(gridSize).fill(-1);
        this.errors = new Array(gridSize).fill(false);
        this.sumGroups = sumGroups;
        this.rowMaps = [];
        this.colMaps = [];
        this.sqrMaps = [];
        this.sumMaps = [];
        this.getMaps();
    };

    getMaps() {
        if (this.rowMaps.length === 0) {
            let currIndex = 0;
            while (currIndex < this.gridSize) {
                for (let i = 0; i < Math.sqrt(this.gridSize); i++) {
                    for (let j = 0; j < Math.sqrt(this.gridSize); j++) {
                        this.rowMaps.push(i);
                        currIndex++;
                    };
                };
            };
        };

        if (this.colMaps.length === 0) {
            let currIndex = 0;
            while (currIndex < this.gridSize) {
                for (let i = 0; i < Math.sqrt(this.gridSize); i++) {
                    for (let j = 0; j < Math.sqrt(this.gridSize); j++) {
                        this.colMaps.push(j);
                        currIndex++;
                    };
                };
            };
        };

        if (this.sqrMaps.length === 0) {
            this.sqrMaps = new Array(this.gridSize).fill(-1);
            let currIndex = 0;
            while(currIndex < this.gridSize) {
                if (this.colMaps[currIndex] < 3) {
                    if (this.rowMaps[currIndex] < 3) {
                        this.sqrMaps[currIndex] = 0;
                    } else if (this.rowMaps[currIndex] < 6) {
                        this.sqrMaps[currIndex] = 3;
                    } else {
                        this.sqrMaps[currIndex] = 6;
                    };
                } else if (this.colMaps[currIndex] < 6)  {
                    if (this.rowMaps[currIndex] < 3) {
                        this.sqrMaps[currIndex] = 1;
                    } else if (this.rowMaps[currIndex] < 6) {
                        this.sqrMaps[currIndex] = 4;
                    } else {
                        this.sqrMaps[currIndex] = 7;
                    };
                } else {
                    if (this.rowMaps[currIndex] < 3) {
                        this.sqrMaps[currIndex] = 2;
                    } else if (this.rowMaps[currIndex] < 6) {
                        this.sqrMaps[currIndex] = 5;
                    } else {
                        this.sqrMaps[currIndex] = 8;
                    };
                };
                currIndex++;
            };
        };

        if (this.sumMaps.length === 0) {
            console.log('in sumMaps')
            console.log(this.sumGroups[0].cells)
            this.sumMaps = new Array(this.gridSize).fill(0);
            let currIndex = 0;
            for (let group of this.sumGroups) {
                for (let i = 0; i < group.cells.length; i++) {
                    this.sumMaps[group.cells[i]] = currIndex
                };
                currIndex++;
            };
        };
    };

    checkErrors() {
        let rowErrors = this.getGroupErrors(this.rowMaps);
        let colErrors = this.getGroupErrors(this.colMaps);
        let sqrErrors = this.getGroupErrors(this.sqrMaps);
        // let sumErrors = this.getGroupErrors(this.sumMaps);

        this.errors = [];
        for (let i = 0; i < this.gridSize; i++) {
            if (rowErrors[i] || colErrors[i] || sqrErrors[i]) {
                this.errors.push(true);
            } else {
                this.errors.push(false);
            };
        };
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


    getGroupErrors(groupMap) {
        let groupErrors = [];
        for (let i = 0; i < 9; i++) {
            let group = [];
            for (let j = 0; j < 81; j++) {
                if (groupMap[j] === i) {
                    group.push(this.penMarks[j]);
                };
            };
            groupErrors = groupErrors.concat(this.checkGroup(group));
        };

        let remappedErrors = [];

        for (let i = 0; i < 9; i++) {
            let subA = [];
            remappedErrors.push(subA);
        };

        for (let i = 0; i < groupErrors.length; i++) {
            remappedErrors[groupMap[i]].push(groupErrors[i]);
        }
        return remappedErrors.flat();
    };

    clearPenMarks() {
        this.penMarks = new Array(this.gridSize).fill(0);
    }

    clearPencilMarks() {
        this.pencilMarks = [];
        for (let i = 0; i < Math.sqrt(this.gridSize); i++) {
            this.pencilMarks.push(new Array(Math.sqrt(this.gridSize)).fill(-1));
        };
    };
};

