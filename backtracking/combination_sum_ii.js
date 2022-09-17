// Q:40 - https://leetcode.com/problems/combination-sum-ii/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];

    candidates.sort((a, b) => a - b)

    const dfs = (index, currentSum, currentList) => {
        if (currentSum === target){
            result.push([...currentList]);
            return;
        }

        if (index >= candidates.length || currentSum > target){
            return;
        }

        currentList.push(candidates[index]);
        dfs(index + 1, currentSum + candidates[index], currentList)

        const item = currentList.pop();
        while (candidates[index] === item){
            index++;
        }
        dfs(index, currentSum, currentList)
    }

    dfs(0, 0, [])

    return result;
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8))

console.log(combinationSum2([2,5,2,1,2], 5))