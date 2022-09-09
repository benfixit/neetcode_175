# Q:15 - https://leetcode.com/problems/3sum/

from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        sortedNums = sorted(nums)
        result = list()

        for i in range(len(sortedNums)):
            if i > 0 and sortedNums[i] == sortedNums[i - 1]:
                continue

            current = sortedNums[i]

            left, right = i + 1, len(sortedNums) - 1

            print(sortedNums)

            while left < right:
                sum = current + sortedNums[left] + sortedNums[right]

                if sum > 0:
                    right -= 1
                elif sum < 0:
                    left += 1
                else:
                    result.append([current, sortedNums[left], sortedNums[right]])
                    
                    left += 1
                    right -= 1

                    while left < right and sortedNums[left] == sortedNums[left - 1]:
                        left += 1

                    while left < right and sortedNums[right] == sortedNums[right + 1]:
                        right -= 1

        
        return result






c = Solution()

nums1 = [-1,0,1,2,-1,-4]
nums2 = [0,1,1]
nums3 = [0,0,0]
nums4 = [-2,0,0,2,2]

# print(c.threeSum(nums1))
# print(c.threeSum(nums2))
# print(c.threeSum(nums3))
# print(c.threeSum(nums4))

print(c.threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))