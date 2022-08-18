# Q:78 - https://leetcode.com/problems/subsets/

from typing import List

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = []
        subset = []
        
        def dfs(i):
            if i >= len(nums):
                result.append(subset.copy())
                return

            subset.append(nums[i])
            dfs(i + 1)

            subset.pop()
            dfs(i + 1)

        dfs(0)

        return result


c = Solution()

nums1 = [1,2,3]
nums2 = [0]

print(c.subsets(nums1))
# print(c.subsets(nums2))