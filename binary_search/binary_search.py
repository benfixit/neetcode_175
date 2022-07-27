from typing import List

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        
        while left <= right:
            mid = left + (right - left) // 2
            
            current = nums[mid]
            if current > target:
                right = mid - 1
            elif current < target:
                left = mid + 1
            else:
                return mid
        
        return -1


c = Solution()

nums1 = [-1,0,3,5,9,12]
target1 = 9

nums2 = [-1,0,3,5,9,12]
target2 = 2

print(c.search(nums1, target1))
print(c.search(nums2, target2))