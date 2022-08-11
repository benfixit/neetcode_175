# Q:238 - https://leetcode.com/problems/product-of-array-except-self/

from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = [0] * len(nums)

        prefix, postfix = 1, 1

        for index in range(0, len(nums)):
            result[index] = prefix
            prefix *= nums[index]

        for index in range(len(nums) - 1, -1, -1):
            result[index] *= postfix
            postfix *= nums[index]

        return result


c = Solution()

nums1 = [1, 2, 3, 4]

nums2 = [-1, 1, 0, -3, 3]

print(c.productExceptSelf(nums1))
print(c.productExceptSelf(nums2))