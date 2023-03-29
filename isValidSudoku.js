var isValidSudoku = function (board) {
    const ROWS = 9, COLS = 9, BOXES = 9;

    for (let row = 0; row < ROWS; row++) {
        const rowSet = new Set();
        for (let col = 0; col < COLS; col++) {
            const num = board[row][col];
            if (num !== '.') {
                if (rowSet.has(num)) {
                    return false;
                } else {
                    rowSet.add(num);
                }
            }
        }
    }

    // Check columns
    for (let col = 0; col < COLS; col++) {
        const colSet = new Set();
        for (let row = 0; row < ROWS; row++) {
            const num = board[row][col];
            if (num !== '.') {
                if (colSet.has(num)) {
                    return false;
                } else {
                    colSet.add(num);
                }
            }
        }
    }

    // Check boxes
    for (let box = 0; box < BOXES; box++) {
        const boxSet = new Set();
        const startRow = Math.floor(box / 3) * 3;
        const startCol = (box % 3) * 3;
        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                const num = board[row][col];
                if (num !== '.') {
                    if (boxSet.has(num)) {
                        return false;
                    } else {
                        boxSet.add(num);
                    }
                }
            }
        }
    }

    return true;
}


let sudokuBoard =
    [
        ["8", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ];

console.log(isValidSudoku(sudokuBoard));