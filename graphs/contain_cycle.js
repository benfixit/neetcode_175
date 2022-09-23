// Q: 1559 - https://leetcode.com/problems/detect-cycles-in-2d-grid/

/**
 * @param {character[][]} grid
 * @return {boolean}
 */
 var containsCycle = function(grid) {
    const visited = new Set();
    
    const dfs = (row, col, oldRow, oldCol, currentChar) => {
        if (
            row < 0 || 
            row >= grid.length || 
            col < 0 || 
            col >= grid[0].length || 
            grid[row][col] !== currentChar
        ){
            return false;
        }

        if (visited.has(`${row},${col}`)){
            return true;
        }
        
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        visited.add(`${row},${col}`);
        
        for (let dir of dirs) {
            const [newRow, newCol] = [dir[0] + row, dir[1] + col];

            if (newRow === oldRow && newCol === oldCol) {
                continue;
            }

            if (dfs(newRow, newCol, row, col, currentChar)){
                return true;
            }

        }

        return false;

    }
    
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){            
            if (!visited.has(`${i},${j}`)){
                if (dfs(i, j, -1, -1, grid[i][j])){
                    return true;
                }
            }
        }
    }
    
    return false;
};