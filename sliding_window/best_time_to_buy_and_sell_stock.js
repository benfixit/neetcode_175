// 121: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0,
    buyingPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyingPrice) {
      buyingPrice = prices[i];
    }

    const profit = prices[i] - buyingPrice;

    max = Math.max(max, profit);
  }

  return max;
};
