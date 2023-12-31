# Q:26 - https://leetcode.com/problems/remove-duplicates-from-sorted-array/

from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        lastIndex = 1

        for index in range(1, len(nums)):
            if nums[index - 1] != nums[index]:
                nums[lastIndex] = nums[index]
                lastIndex += 1
        
        return lastIndex