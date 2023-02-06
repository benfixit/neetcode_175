/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let count = 0;

    while (count < k){
        let lastItem = grid[grid.length - 1][grid[0].length - 1];

        for (let i = 0; i < grid.length; i++){

            for (let j = 0; j < grid[0].length; j++){
                const curr = grid[i][j];
                grid[i][j] = lastItem;

                lastItem = curr;
            }
        }

        count += 1;
    }

    return grid;
};