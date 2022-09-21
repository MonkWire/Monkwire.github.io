export class PuzzleGenerator {

}

export class PuzzleSolver {
    constructor(board, game) {
        this.board = board;
        this.lastSafeState = board;
        this.rowMaps = game.rowMaps;
        this.colMaps = game.colMaps;
        this.sqrMap = game.sqrMap;
    };


    checkSoleCandidatesWithinGroup(groupMap, cellIndex) {
        let groupMembers = [];
        for (let i = 0; i < this.board.length; i++) {
            if (groupMap[i] === groupMap[cellIndex]) {
                groupMembers.push(this.board[i]);
            };
        };

        let possibleEntries = [];
    }

    checkSoleCandidates() {
        for (let i = 0; i < this.board.length; i++) {
            let possibleEntries = [];
            for (let j = 1; j  < 10; j++) {
            }

        }
    }



}