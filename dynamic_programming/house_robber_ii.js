//Q:213 - https://leetcode.com/problems/house-robber-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length){
    return 0;
  }

  if (nums.length <= 2) {
      return Math.max(nums[0], nums[1] ?? 0);
  }

  const dp = Array(nums.length + 1).fill(0);

  dp[0] = 0;
  dp[1] = nums[0];

  for (let i = 1; i < nums.length; i++){
    if (i === nums.length - 1 && nums.length % 2 === 0){
      dp[i + 1] = Math.max(dp[i - 1] + nums[i] - dp[1], dp[i]);
    } else {
      dp[i + 1] = Math.max(dp[i - 1] + nums[i], dp[i]);
    }
  }

  return dp[dp.length - 1];
};

console.log(rob([2,3,2])) //3
// console.log(rob([1,2,3,1])); // 4
// console.log(rob([1, 2, 3])); // 3
// console.log(rob([1, 2])); // 2
// console.log(rob([1, 2, 1, 1])); // 3
