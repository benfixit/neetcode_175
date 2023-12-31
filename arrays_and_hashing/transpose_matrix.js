//Q:867 - https://leetcode.com/problems/transpose-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const result = [];

    for (let i = 0; i < matrix[0].length; i++){
        const temp = [];
        for (let j = 0; j < matrix.length; j++){
            temp.push(matrix[j][i]);
        }

        result.push(temp);
    }

    return result;
};

console.log(transpose([[1,2,3,4],[5,6,7,8]])) // [[1, 5], [2, 6], [3, 7], [4, 8]]
console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))