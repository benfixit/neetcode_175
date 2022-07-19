# Q:1 - https://leetcode.com/problems/two-sum/

from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}

        for i in range(len(nums)):
            current = nums[i]
            # calculate the complement 
            complement = target - current
            # if the complement is in the map, that's it, c'est fini
            if complement in map:
                return [map[complement], i]

            # add the current to the map
            map[current] = i

        return [None, None]


nums1 = [2,7,11,15]
target1 = 9

nums2 = [3,2,4]
target2 = 6

nums3 = [3,3]
target3 = 6

c = Solution()

print(c.twoSum(nums1, target1))
print(c.twoSum(nums2, target2))
print(c.twoSum(nums3, target3))