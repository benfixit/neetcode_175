// Q:78 - https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];

  const dfs = (index, numsList) => {
    if (index === nums.length) {
      result.push([...numsList]);
      return;
    }

    numsList.push(nums[index]);
    dfs(index + 1, numsList);

    numsList.pop();
    dfs(index + 1, numsList);
  };

  dfs(0, []); 

  return result;
};

console.log(subsets([1, 2, 3]));