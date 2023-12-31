// Q:746 - https://leetcode.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const dp = Array(cost.length + 1).fill(0);

    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i <= cost.length; i++){
        dp[i] = (cost[i] ?? 0) + Math.min(dp[i - 1], dp[i - 2]);
    }

    return dp[dp.length - 1];
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))