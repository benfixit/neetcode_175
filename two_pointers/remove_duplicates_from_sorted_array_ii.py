# https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        lastIndex = 0
        startIndex = 0
        index = 1

        while index < len(nums):
            if nums[index - 1] != nums[index]:
                maxCount = min(index - startIndex, 2)

                fill = 0
                while fill < maxCount:
                    nums[lastIndex] = nums[index - 1]
                    lastIndex += 1
                    fill += 1

                startIndex = index            
            index += 1

        print(startIndex, len(nums))
        
        if startIndex != len(nums):
            maxCount = min(len(nums) - startIndex, 2)

            fill = 0
            while fill < maxCount:
                nums[lastIndex] = nums[index - 1]
                lastIndex += 1
                fill += 1

        return lastIndex

c = Solution()

print(c.removeDuplicates([0,0,1,1,1,1,2,3,3]))

print(c.removeDuplicates([1,1,1,2,2,3]))

# print(c.removeDuplicates([0,0,1,1,1,1,2,3,3]))
