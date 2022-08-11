# Q:128 - https://leetcode.com/problems/longest-consecutive-sequence/
from typing import List

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        map, longest = {}, 0
        for num in nums:
            map[num] = True

        for num in nums:
            if (num - 1) in map:
                continue
            else:
                start = num
                currentLongest = 0
                while start in map:
                    currentLongest += 1
                    start += 1
                
                longest = max(longest, currentLongest)
        
        return longest


c = Solution()

nums1 = [100,4,200,1,3,2]
nums2 = [0,3,7,2,5,8,4,6,0,1]

print(c.longestConsecutive(nums1))
print(c.longestConsecutive(nums2))