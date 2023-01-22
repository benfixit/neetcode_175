// Q:130: https://leetcode.com/problems/surrounded-regions/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const getIslands = (board) => {
        const islands = [];
        const visited = new Set();

        const dfs = (row, col, list) => {
            list.push([row, col]);
            visited.add(`${row},${col}`);

            const directions = [
                [0, 1],
                [0, -1],
                [1, 0],
                [-1, 0]
            ]

            for(let dir of directions){
                const [newRow, newCol] = [dir[0] + row, dir[1] + col];

                if (
                    newRow < 0 ||
                    newRow >= board.length ||
                    newCol < 0 ||
                    newCol >= board[0].length ||
                    board[newRow][newCol] === "X" ||
                    visited.has(`${newRow},${newCol}`)
                ){
                    continue;
                }

                dfs(newRow, newCol, list);
            }

            return list;
        }

        for (let i = 0; i < board.length; i++){
            for (let j = 0; j < board[0].length; j++){

                if (board[i][j] === "O" && !visited.has(`${i},${j}`)){
                    const res = dfs(i, j, []);
                    islands.push(res);
                }
            }
        }

        return islands;
    }

    const islands = getIslands(board);

    const canBeCaptured = [];

    for (let island of islands){
        let canBeCapturedFlag = true;

        for (let coord of island){
            const [row, col] = coord;

            if (
                row <= 0 ||
                row >= board.length - 1 ||
                col <= 0 ||
                col >= board[0].length - 1
            ){
                canBeCapturedFlag = false;
                break;
            }
        }

        if (canBeCapturedFlag){
            canBeCaptured.push(island);
        }
    }

    for (let island of canBeCaptured){
        for (let coord of island){
            const [row, col] = coord;

            board[row][col] = "X";
        }
    }



    return board;
};

const input = [
    ["X","X","X","X"],
    ["X","O","O","X"],
    ["X","X","O","X"],
    ["X","O","X","X"]
];

console.log(solve(input));