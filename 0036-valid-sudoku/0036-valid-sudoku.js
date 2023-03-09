/**
 * @param {character[][]} board
 * @return {boolean}
 */

function isValid(board, x, y, num) {

    let xF = 0;
    let yF = 0;
    let cF = 0;

    for (let i = 0; i < board.length; i++) {
        if (board[y][i] == num) xF++;
        if (board[i][x] == num) yF++;

        let cell = board[3 * Math.floor(y/3) + Math.floor(i/3)][3 * Math.floor(x/3) + i % 3]

        if (cell == num) cF++;


    }

    if (xF == 1 && yF == 1 && cF == 1) {
        return true;
    } else {
        return false;
    }

}

var isValidSudoku = function(board) {
    for (let y = 0; y < board.length; y++) {

        for (let x = 0; x < board.length; x++){

            if (board[y][x] != ".") {
                
                if (isValid(board, x, y, board[y][x])) {
                   continue;
                } else {
                    return false;
                }
            }
        }
    }

    return true;
};