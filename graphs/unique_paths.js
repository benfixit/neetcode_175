//Q:62 - https://leetcode.com/problems/unique-paths/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const memo = {};
    let total = 0;

    const dfs = (row, col, ) => {
        if (
            row === m - 1 && 
            col === n - 1
        ){
            total += 1;
            return;
        }

        const directions = [
            [0, 1],
            [1, 0]
        ]
        
        for (let dir of directions){
            const [newRow, newCol] = [row + dir[0], col + dir[1]];

            if (newRow >= m || newCol >= n){
                continue;
            }

            dfs(newRow, newCol);
        }
    }

    dfs(0, 0);

    return total;
};

console.log(uniquePaths(3, 7))
console.log(uniquePaths(3, 3))
// console.log(uniquePaths(23, 12))

/**
 * 28
3
193536720

[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
 */