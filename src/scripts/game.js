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
                        this.sqrMaps[currIndex] = 0;
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
        this.errors = this.getRowErrors();
        this.getColumnErrors();
    }

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
        for (let i = 0; i < 9; i++) {
            let row = [];
            for (let j = 0; j < 81; j++) {
                if (this.rowMaps[j] === i) {
                    row.push(this.penMarks[j]);
                };
            };
            rowErrors = rowErrors.concat(this.checkGroup(row));
        };
        return rowErrors;
    };



    //     let rowErrors = [];

    //     let currIndex = 0;
    //     for (let i = 0; i < Math.sqrt(this.gridSize); i++) {
    //         let row = [];
    //         for (let j = 0; j < Math.sqrt(this.gridSize); j++) {
    //             row.push(this.penMarks[currIndex]);
    //             currIndex++;
    //         };

    //         let currRowErrors = this.checkGroup(row);
    //         for (let j = 0; j < currRowErrors.length; j++) {
    //             rowErrors.push(currRowErrors[j])
    //         }
    //     };

    //     return rowErrors;
    // };

    getColumns() {

    }


    getColumnErrors() {
        // let colErrors = [];


        // let cols = [];
        // for (let i = 0; i < 9; i++) {
        //     let subArr = [];
        //     for (let j = 0; j < 9; j++) {
        //         subArr.push(0)
        //     };
        //     cols.push(subArr);
        // };
        // console.log(cols);


        // let currIndex = 0;
        // while(currIndex < 81) {
        //     cols[currIndex % 9][Math.floor(currIndex / 9)] = this.penMarks[currIndex];
        //     currIndex++;
        // }

        // for (let c of cols) {
        //     colErrors.push(this.checkGroup(c));
        // }


        
        
        // console.log(colErrors);
    };
};

