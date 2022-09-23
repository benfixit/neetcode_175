// Q: 52 - https://leetcode.com/problems/n-queens-ii/

/**
 * @param {number} n
 * @return {number}
 */
 var totalNQueens = function(n) {
    let distinctSolutions = 0;
    let negDiagonal = new Set(), posDiagonal = new Set(), colSet = new Set();
    
    const backtrack = (row) => {
        if (row === n){
            distinctSolutions += 1;
            return;
        }
        
        for (let col = 0; col < n; col++){
            if (colSet.has(col) || negDiagonal.has(row - col) || posDiagonal.has(row + col)){
                continue;
            }
            
            colSet.add(col)
            negDiagonal.add(row - col)
            posDiagonal.add(row + col)
            
            backtrack(row + 1)
            
            colSet.delete(col)
            negDiagonal.delete(row - col)
            posDiagonal.delete(row + col)

        }
    }
    
    backtrack(0)
    
    return distinctSolutions;
};