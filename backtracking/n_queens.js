// Q: 51 - https://leetcode.com/problems/n-queens/

/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    let result = [];
    
    let colSet = new Set(), posDiagonalSet = new Set(), negDiagonalSet = new Set();
    
    const board = Array.from({ length: n }, (_, k) => new Array(n).fill("."));
    
    const backtrack = (row) => {
        if (row === n){
            const temp = board.map(bRow => bRow.join(""))
            result.push(temp)
            return;
        }
        
        for (let col = 0; col < n; col++){
            if (colSet.has(col) || posDiagonalSet.has(row + col) || negDiagonalSet.has(row - col)){
                continue;
            }
            
            colSet.add(col);
            posDiagonalSet.add(row + col)
            negDiagonalSet.add(row - col)
            board[row][col] = "Q";
            
            backtrack(row + 1);
            
            colSet.delete(col);
            posDiagonalSet.delete(row + col)
            negDiagonalSet.delete(row - col)
            board[row][col] = ".";
        }
    }
    
    backtrack(0);
    
    return result;
};