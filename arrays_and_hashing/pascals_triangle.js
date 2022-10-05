// Q: 118 - https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    const result = [[1]]
    
    for (let i = 2; i <= numRows; i++){
        const current = [], base = result[i - 2];
        for (let j = 0; j < i; j++){
            const first = j - 1 < 0 ? 0 : base[j - 1];
            const second = base[j] ?? 0
            
            current.push(first + second)
        }
        
        result.push(current)
    }
        
    return result;
};