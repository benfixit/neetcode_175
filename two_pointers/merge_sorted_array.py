from typing import List

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        nums1Index = m - 1
        nums2Index = n - 1
        index = len(nums1) - 1

        while nums2Index >= 0 and nums1Index >= 0:
            if nums1[nums1Index] > nums2[nums2Index]:
                nums1[index] = nums1[nums1Index]
                nums1Index -= 1
            else:
                nums1[index] = nums2[nums2Index]
                nums2Index -= 1

            index -= 1

        if nums2Index > -1:
            while nums2Index >= 0:
                nums1[index] = nums2[nums2Index]
                nums2Index -= 1
                index -= 1
        
        return nums1

nums1 = [2, 0]
m = 1
nums2 = [1]
n = 1

c = Solution()

print(c.merge(nums1, 1, nums2, 1))