# Q:11 - https://leetcode.com/problems/container-with-most-water/

from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        maxWater = 0

        while left < right:
            current = min(height[left], height[right]) * (right - left)

            maxWater = max(maxWater, current)

            #if height at left is smaller, move left towards right
            if height[left] < height[right]:
                left += 1
            elif height[right] < height[left]:
                #if height at right is smaller, move right towards left
                right -= 1
            else:
                left += 1
                right -= 1
        
        return maxWater
    

c = Solution()

height1 = [1,8,6,2,5,4,8,3,7]
height2 = [1, 1]
height3 = [1, 2, 4, 3]

print(c.maxArea(height1))
print(c.maxArea(height2))
print(c.maxArea(height3))

            
