export class SampleInputs {
    constructor(gridSize=81) {
        this.gridSize = gridSize;
        this.samplePenMarks = [6, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 6, 0, 0, 8, 0, 9, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 4, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 4, 7, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 7, 2, 0, 0, 2, 0, 3, 0, 0, 9, 0, 0, 0, 0, 0, 0, 1, 0, 0, 7, 0, 6];
        this.blankPenMarks = new Array(this.gridSize).fill(0);
        this.samplePencilMarks = []
        for (let i = 0; i < this.gridSize; i++) {
            let cell = new Array(9).fill(-1);
            this.samplePencilMarks.push(cell);
        };

        this.puzzle1 = [
        {sum: 11, cells: [0, 9, 10, 19]},
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

        this.puzzle2 = [
            {sum: 6, cells: [0, 1]},
            {sum: 10, cells: [2, 3]},
            {sum: 9, cells: [4, 13]},
            {sum: 15, cells: [5, 6]},
            {sum: 9, cells: [7, 8]},
            {sum: 16, cells: [9, 18, 19, 28]},
            {sum: 15, cells: [10, 11]},
            {sum: 15, cells: [12, 21]},
            {sum: 3, cells: [14, 23]},
            {sum: 5, cells: [15, 16]},
            {sum: 21, cells: [17, 25, 26, 34]},
            {sum: 10, cells: [20, 29]},
            {sum: 24, cells: [22, 30, 31, 32]},
            {sum: 9, cells: [24, 33]},
            {sum: 13, cells: [27, 36]},
            {sum: 17, cells: [35, 44]},
            {sum: 4, cells: [37, 38]},
            {sum: 20, cells: [39, 47, 48]},
            {sum: 9, cells: [40, 49]},
            {sum: 8, cells: [41, 50, 51]},
            {sum: 8, cells: [42, 43]},
            {sum: 19, cells: [45, 46, 55, 56]},
            {sum: 28, cells: [52, 53, 60, 61]},
            {sum: 26, cells: [54, 63, 64, 65]},
            {sum: 13, cells: [57, 66, 74, 75]},
            {sum: 12, cells: [58, 67, 76]},
            {sum: 27, cells: [59, 68, 77, 78]},
            {sum: 13, cells: [62, 69, 70, 71]},
            {sum: 12, cells: [72, 73]},
            {sum: 9, cells: [79, 80]},


        ]


        // Error checking

        this.penErrors = [6, 0, 0, 6, 0, 8, 0, 0, 0, 0, 6, 0, 6, 0, 0, 8, 0, 9, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 4, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 4, 7, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 7, 2, 0, 0, 2, 0, 3, 0, 0, 9, 0, 0, 0, 0, 0, 0, 1, 0, 0, 7, 0, 6];

        this.penIndeces = [];
        for (let i = 0; i < 81; i++) {
            this.penIndeces.push(i)
        };


    };
};

