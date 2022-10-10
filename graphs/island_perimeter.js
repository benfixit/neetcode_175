// Q: 463 - https://leetcode.com/problems/island-perimeter/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    const visited = new Set();

    const dfs = (row, col) => {
        if (visited.has(`${row},${col}`)){
            return 0;
        }

        if (
            row < 0 ||
            row >= grid.length ||
            col < 0 ||
            col >= grid[0].length ||
            grid[row][col] === 0
        ) {
            return 1;
        }

        let count = 0;

        visited.add(`${row},${col}`);

        const directions = [[1,0], [-1,0], [0,1], [0,-1]];

        for (let dir of directions){
            const [newRow, newCol] = [dir[0] + row, dir[1] + col];

            count += dfs(newRow, newCol);
        }

        return count;
    }

    for(let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            if (grid[i][j] === 1 && !visited.has(`${i},${j}`)){
                return dfs(i, j)
            }
        }
    }
     
     return 0;
};