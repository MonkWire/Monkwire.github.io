export class CanvasBoard {
    constructor(pencilMarks, penMarks, sumClues, gridWidth, gridHeight) {
        this.penMarks = penMarks;
        this.pencilMarks = pencilMarks;
        this.sumClues = sumClues;
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
    };

    drawGridLines(ctx) {
        console.log("drawing grid lines");
        ctx.beginPath();
        ctx.rect(0, 0, this.gridWidth, this.gridHeight);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 8;
        ctx.stroke();

        for (let i = 0; i < 9; i++) {
            ctx.beginPath();
            ctx.moveTo(0, (this.gridHeight / 9) * i);
            ctx.lineTo(this.gridWidth, (this.gridHeight / 9) * i);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            if (i % 3 === 0)  { ctx.lineWidth = 4};
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo((this.gridWidth / 9) * i, 0);
            ctx.lineTo((this.gridWidth / 9) * i, this.gridHeight);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            if (i % 3 === 0) { ctx.lineWidth = 4};
            ctx.stroke();
        };
    };

    drawPenMarks(ctx, currentBoard) {
        // for (let i = 0; i < 9; i++) {
        //     for (let j = 0; j < 9; j++) {
        //         ctx.font = '30px serif';
                // ctx.fillText(`${j}`, (this.gridWidth / 9) * i + 25, (this.gridHeight / 9) * j + 45);
        //     };
        // };

        let currIndex = 0;

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (currentBoard[currIndex] != 0) {
                    ctx.font = '30px serif';
                    ctx.fillText(`${currentBoard[currIndex]}`, (this.gridWidth / 9) * i + 25, (this.gridHeight / 9) * j + 45);
                };
            };
        };
    };
};
