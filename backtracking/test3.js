/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === word[0] ) {
                if (dfs(0, row, col, word, board, {})) {
                    return true;
                }
            }
        }
    }
    return false;
};

function dfs(index, row, col, word, board, visited) {
    if (index >= word.length - 1) {
        return true;
    }
    
    // if (word[index] !== board[row][col]) {
    //     return false;
    // }
    
    visited[`${row},${col}`] = true;
    
    const candidates = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    for (const candidate of candidates) {
        const [i, j] = candidate;
        const r = row + i;
        const c = col + j;
        
        if (r < board.length && 
           r >= 0 &&
           c < board[r].length &&
           c  >= 0 &&
           !visited[`${r},${c}`] &&
           word[index + 1] === board[r][c]
           ) {
            if (dfs(index + 1, r, c, word, board, visited)) {
                return true;
            }
        }
    }
    // return true;
}


console.log(exist([["a"]], "a"))

console.log(exist([
    ["A", "B", "C", "E"], 
    ["S", "F", "C", "S"], 
    ["A", "D", "E", "E"]
], "ABCB"))

console.log(exist([
    ["A", "B", "C", "E"], 
    ["S", "F", "C", "S"], 
    ["A", "D", "E", "E"]
], "ABCCED"))

console.log(exist([
    ["A", "B", "C", "E"], 
    ["S", "F", "C", "S"], 
    ["A", "D", "E", "E"]
], "ABCESEEEFS"))