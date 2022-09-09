/**
 * Climbing stairs memoized recursion
 * @param {*} n
 * @returns
 */
const climbingStairs = (n) => {
  if (n < 2) {
    return 1;
  }

  return climbingStairs(n - 1) + climbingStairs(n - 2);
};

/**
 * Climbing stairs dp
 * @param {*} n
 * @returns
 */
const climbingStairsDp = (n) => {
  const dp = Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
