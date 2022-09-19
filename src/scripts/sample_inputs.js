export class SampleInputs {
    constructor(gridSize=81) {
        this.gridSize = gridSize;
        this.samplePenMarks = [6, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 6, 0, 0, 8, 0, 9, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 4, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 4, 7, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 7, 2, 0, 0, 2, 0, 3, 0, 0, 9, 0, 0, 0, 0, 0, 0, 1, 0, 0, 7, 0, 6];
        this.blankPenMarks = new Array(this.gridSize).fill(0);
        this.samplePencilMarks = []
        for (let i = 0; i < this.gridSize; i++) {
            let cell = [];
            for (let j = 0; j < 9; j++) {
                cell.push(-1);
            }
            this.samplePencilMarks.push(cell);
        };
        this.sampleGroups = [{sum: 11, cells: [0, 9, 10, 19]},
        {sum: 25, cells: [1, 2, 3, 12]},
        {sum: 14, cells: [4, 13]},
        {sum: 9, cells: [5, 6]},
        {sum: 12, cells: [7, 8]},
        {sum: 15, cells: [11, 20]},
        {sum: 4, cells: [14, 15]},
        {sum: 14, cells: [16, 25]},
        {sum: 6, cells: [17, 26]},
        {sum: 40, cells: [18, 27, 36, 37, 38, 39, 45, 54]},
        {sum: 3, cells: [21, 30]},
        {sum: 15, cells: [22, 31]},
        {sum: 9, cells: [23, 24]},
        {sum: 8, cells: [28, 29]},
        {sum: 12, cells: [32, 33]},
        {sum: 38, cells: [34, 35, 42, 43, 44, 52, 53]},
        {sum: 11, cells: [40, 41]},
        {sum: 15, cells: [46, 47]},
        {sum: 13, cells: [48, 57]},
        {sum: 6, cells: [49, 58]},
        {sum: 4, cells: [50, 51]},
        {sum: 17, cells: [55, 63, 64, 72]},
        {sum: 7, cells: [56, 65]},
        {sum: 13, cells: [59, 60]},
        {sum: 10, cells: [61, 70]},
        {sum: 6, cells: [62, 71]},
        {sum: 26, cells: [66, 73, 74, 75]},
        {sum: 4, cells: [67, 76]},
        {sum: 15, cells: [68, 69]},
        {sum: 11, cells: [77, 78]},
        {sum: 12, cells: [79, 80]}];
    };
};

