// Q:39 - https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    const result = [];
    
    const dfs = (index, currentSum, currentList) => {
        if (currentSum === target){
            result.push([...currentList]);
            return;
        }

        if (index >= candidates.length || currentSum > target){
            return false;
        }

        currentList.push(candidates[index])
        dfs(index, currentSum + candidates[index], currentList)

        currentList.pop();
        dfs(index + 1, currentSum, currentList)
    }
    
    dfs(0, 0, []);
    
    return result;
};

console.log(combinationSum([2, 3, 6, 7], 7))