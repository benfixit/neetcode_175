# Q:33 - https://leetcode.com/problems/search-in-rotated-sorted-array/

from typing import List
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1

        while left <= right:
            mid = left + (right - left) // 2

            if nums[mid] == target:
                return mid

            #left side
            if nums[left] <= nums[mid]: 
                if target > nums[mid] or target < nums[left]:
                    left = mid + 1
                else:
                    right = mid - 1
            else:
                if target < nums[mid] or target > nums[right]:
                    right = mid - 1
                else:
                    left = mid + 1
        
        return -1


c = Solution()

nums1 = [4,5,6,7,0,1,2]
target1 = 0

nums2 = [4,5,6,7,0,1,2]
target2 = 3

nums3 = [1]
target3 = 0

print(c.search(nums1, target1))
print(c.search(nums2, target2))
print(c.search(nums3, target3))