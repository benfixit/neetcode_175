/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const visited = {}
    const dfs = (row, col, index) => {
        if (index >= word.length - 1){
            return true;
        }
        
        const candidates = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        visited[`${row},${col}`] = true;

        for (let candidate of candidates){
            const [i, j] = candidate;
            const newRow = row + i, newCol = col + j;

            if (newRow < board.length && 
                newRow >= 0 &&
                newCol < board[newRow].length &&
                newCol  >= 0 &&
                !visited[`${newRow},${newCol}`] &&
                word[index + 1] === board[newRow][newCol]
                ) {
                 if (dfs(newRow, newCol, index + 1)) {
                     return true;
                 }
             }
        }
        visited[`${row},${col}`] = false;


    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                if (dfs(i, j, 0)) {
                    // console.log("VISITED == ", visited)
                    return true;
                }
            }
        }
    }
    return false;
};

console.log(exist([
    ["C", "A", "B"], 
    ["A", "Z", "C"], 
    ["B", "E", "F"]
], "CABE"))


// console.log(exist([["a"]], "a"))

// console.log(exist([
//     ["A", "B", "C", "E"], 
//     ["S", "F", "C", "S"], 
//     ["A", "D", "E", "E"]
// ], "ABCB"))

// console.log(exist([
//     ["A", "B", "C", "E"], 
//     ["S", "F", "C", "S"], 
//     ["A", "D", "E", "E"]
// ], "ABCCED"))

// console.log(exist([
//     ["A", "B", "C", "E"], 
//     ["S", "F", "E", "S"], 
//     ["A", "D", "E", "E"]
// ], "ABCESEEEFS"))