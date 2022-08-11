# Q:153 - https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

from typing import List
from sys import maxsize

class Solution:
    def findMin(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        minimum = maxsize

        while left <= right:
            if nums[left] < nums[right]:
                minimum = min(minimum, nums[left])
                return minimum
                
            mid = left + (right - left) // 2
            
            minimum = min(minimum, nums[mid])
            
            if nums[mid] >= nums[left]:
                left = mid + 1
            else:
                right = mid - 1
                
        return minimum


c = Solution()

nums1 = [3,4,5,1,2]

nums2 = [4,5,6,7,0,1,2]

nums3 = [11,13,15,17]

print(c.findMin(nums1))
print(c.findMin(nums2))
print(c.findMin(nums3))