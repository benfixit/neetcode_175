/**
 * @param {number[][]} mat
 * @param {number} target
 * @return {number}
 */
var minimizeTheDifference = function(mat, target) {
    const memo = {};

    for (let i = 0; i < mat.length; i++){
        mat[i] = [...new Set(mat[i])].sort((a, b) => a - b);
    }

    const dfs = (rowIndex, sum) => {
        if (rowIndex > mat.length - 1){
            return Math.abs(sum - target);
        }

        const options = mat[rowIndex];

        if (memo.hasOwnProperty(`${rowIndex},${sum}`)){
            console.log("options::: ", options);
            console.log("rowIndex: ", rowIndex, "sum: ", sum, "value: ", memo[`${rowIndex},${sum}`]);
            return memo[`${rowIndex},${sum}`];
        }

        

        let min = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < options.length; i++){
            const newSum = sum + options[i]
            const temp = dfs(rowIndex + 1, newSum);
            min = Math.min(temp, min);

            if (newSum >= target){
                break;
            }
        }

        memo[`${rowIndex},${sum}`] = min;

        return min;
    }

    return dfs(0, 0);
};

const nums = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
const target = 13;

console.log(minimizeTheDifference(nums, target));