// Q: 695 - https://leetcode.com/problems/max-area-of-island/submissions/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    const visited = new Set();
    let maxLength = 0;
    
    const dfs = (row, col) => {
        if (
            row < 0 ||
            row >= grid.length ||
            col < 0 ||
            col >= grid[0].length ||
            visited.has(`${row},${col}`) ||
            grid[row][col] === 0
        ) { 
            return 0;
        }
        
        visited.add(`${row},${col}`);
        
        let count = 1;
                
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        
        for(let dir of directions){
            const [newRow, newCol] = [dir[0] + row, dir[1] + col];
                        
            count += dfs(newRow, newCol)
        }
        
        return count;
    }
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 1 && !visited.has(`${i},${j}`)){
                const area = dfs(i, j, 0)
                if (area > maxLength){
                    maxLength = area;
                }
            }
        }
    }
    
    return maxLength;
};