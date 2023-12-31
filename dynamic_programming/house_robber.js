//Q:198 - https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length){
    return 0;
  }

  const dp = Array(nums.length + 1).fill(0);

  dp[0] = 0;
  dp[1] = nums[0];

  for (let i = 1; i < nums.length; i++){
      dp[i + 1] = Math.max(dp[i - 1] + nums[i], dp[i]);
  }

  return dp[dp.length - 1];
};
// function rob(nums) {
//   if (nums.length == 0) return 0;

//   const memo = Array(nums.length + 1).fill(0);

//   memo[0] = 0;
//   memo[1] = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//       let val = nums[i];

//       memo[i+1] = Math.max(memo[i], memo[i-1] + val);
//   }

//   console.log("memo end: ", memo)

//   return memo[nums.length];
// }

console.log(rob([1,2,3,1])) //4
console.log(rob([1]));
console.log(rob([0]));
console.log(rob([2, 7, 9, 3, 1])); //12
console.log(rob([]));
console.log(rob([2,1,1,2]))