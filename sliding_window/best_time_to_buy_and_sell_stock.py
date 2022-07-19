# 121: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buyingPrice = prices[0]
        maxProfitMade = 0

        for day in range(1, len(prices)):
            price = prices[day]
            if price < buyingPrice:
                buyingPrice = price
            
            maxProfitMade = max(maxProfitMade, price - buyingPrice)

        return maxProfitMade


c = Solution()

prices1 = [7,1,5,3,6,4]
prices2 = [7,6,4,3,1]

print(c.maxProfit(prices1))
print(c.maxProfit(prices2))