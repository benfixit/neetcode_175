# Q:875 - https://leetcode.com/problems/koko-eating-bananas/

from math import ceil
from typing import List
from sys import maxsize

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        maxEatingQty = max(piles)
        minEatingQty = maxsize
        
        left, right = 1, maxEatingQty
        
        while left <= right:
            mid = left + (right - left) // 2
            total = 0
            
            for pile in piles:
                total += ceil(pile/mid)
                
            if total > h:
                left = mid + 1
            else:
                minEatingQty = min(minEatingQty, mid)
                right = mid - 1
            
        return minEatingQty

c = Solution()

piles1 = [3,6,7,11]
h1 = 8

piles2 = [30,11,23,4,20]
h2 = 5

piles3 = [30,11,23,4,20]
h3 = 6

print(c.minEatingSpeed(piles1, h1))
print(c.minEatingSpeed(piles2, h2))
print(c.minEatingSpeed(piles3, h3))