//Q:119 - https://leetcode.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0){
        return [1]
    }
    
    if (rowIndex === 1){
        return [1, 1]
    }

    const prev = getRow(rowIndex - 1);
    const result = [];
    [result[0], result[rowIndex]] = [prev[0], prev[rowIndex - 1]];

    for (let i = 1; i < prev.length; i++){
        result[i] = prev[i - 1] + prev[i];
    }

    return result;
};