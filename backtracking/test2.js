/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const visited = new Set();
    
    const dfs = (row, col, index) => {
        if (board[row][col] !== word[index] || visited.has(`${row},${col}`)){
            return false;
        }

        if (index === word.length - 1){
            return true;
        }

        visited.add(`${row},${col}`)

        const directions = [
            [1, 0],
            [-1, 0], 
            [0, 1], 
            [0, -1]
        ]

        for (let dir of directions){
            const [newRow, newCol] = [dir[0] + row, dir[1] + col];

            if (newRow < 0 || newRow >= board.length || newCol < 0 || newCol >= board[0].length){
                continue;
            }

            if (dfs(newRow, newCol, index + 1)){
                return true;
            }
        }

        visited.delete(`${row},${col}`)

        return false;
    }
    
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[0].length; j++){
            if (board[i][j] === word[0]){
                if (dfs(i, j, 0)){
                    return true;
                }
            }
        }
    }

    return false
};


const board1 = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  const word1 = "ABCCED";
  
  const board2 = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  const word2 = "SEE";
  
  const board3 = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  const word3 = "ABCB";
  
  const board4 = [
    ["C", "A", "A"],
    ["A", "A", "A"],
    ["B", "C", "D"],
  ];
  const word4 = "AAB";
  
  console.log(exist(board1, word1)); //true
  console.log(exist(board2, word2)); //true
  console.log(exist(board3, word3)); //false
  console.log(exist(board4, word4)); //true
  