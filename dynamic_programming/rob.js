/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = Array(nums.length + 1).fill(0);
  let max = 0;

  dp[1] = nums[0];
  dp[2] = nums[1];

  for (let i = 3; i <= nums.length; i++) {
    dp[i] = nums[i - 1] + Math.max(dp[i - 2], dp[i - 3]);
  }

  for (let num of dp) {
    if (num > max) {
      max = num;
    }
  }

  return max;
};

console.log(rob([1]));
// console.log(rob([2, 7, 9, 3, 1]));
// console.log(rob([]));
