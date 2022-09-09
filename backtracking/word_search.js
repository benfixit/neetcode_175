// Q:79 https://leetcode.com/problems/word-search/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const visited = {};

  const dfs = (row, col, index) => {
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      visited[`${row},${col}`] ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    if (index === word.length - 1) {
      return true;
    }

    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    for (let dir of directions) {
      const [newRow, newCol] = [dir[0] + row, dir[1] + col];

      visited[`${row},${col}`] = true;

      if (dfs(newRow, newCol, index + 1)) {
        return true;
      }

      visited[`${row},${col}`] = false;
    }

    return false;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        //start the search here
        if (dfs(i, j, 0)) {
          return true;
        }
      }
    }
  }

  return false;
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
console.log(exist(board4, word4)); //false
