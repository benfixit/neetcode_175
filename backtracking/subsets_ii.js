// Q:90 - https://leetcode.com/problems/subsets-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b)

    const dfs = (index, numList) => {
        if (index === nums.length){
            result.push([...numList]);
            return;
        }

        numList.push(nums[index]);
        dfs(index + 1, numList)

        numList.pop();

        while(index + 1 < nums.length && nums[index] === nums[index + 1]){
            index++
        }
        dfs(index + 1, numList)
    }

    dfs(0, [])

    return result;
};

console.log(subsetsWithDup([1, 2, 2]));