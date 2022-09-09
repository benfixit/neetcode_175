// Q:53 https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentSum = 0,
    maxSum = nums[0];

  for (let num of nums) {
    if (currentSum < 0) {
      currentSum = 0;
    }

    currentSum += num;
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};
