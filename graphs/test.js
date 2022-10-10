// Q: 463 - https://leetcode.com/problems/island-perimeter/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    let perimeter = 0;
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
            // console.log("value == ", count)
            // perimeter += value;
        }

        // console.log("we got here last == ", row, col)
        return count;
    }

    for(let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            if (grid[i][j] === 1 && !visited.has(`${i},${j}`)){
                return dfs(i, j)
            }
        }
    }

    console.log("we never got here")
    return perimeter;
};

// const grid1 = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// const grid1 = [[1,0],[1,0]]
const grid1 = [[0,1,0,0],[1,1,1,0]]
console.log(islandPerimeter(grid1))

// const grid2 = [[1]]
// console.log(islandPerimeter(grid2))

// const grid3 = [[1, 0]]
// console.log(islandPerimeter(grid3))