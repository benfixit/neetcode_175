// Q:48 https://leetcode.com/problems/rotate-image/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  /**
   * Transpose the matrix
   */
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < row; col++) {
      const temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }

  /**
   * Reverse each row
   */
  for (let row of matrix) {
    row.reverse();
  }
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
