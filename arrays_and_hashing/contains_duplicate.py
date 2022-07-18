from typing import List
from collections import Counter

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        map = Counter(nums)

        for freq in map.values():
            if freq > 1:
                return True

        return False



c = Solution()

nums1 = [1,2,3,1]
nums2 = [1,2,3,4]
nums3 = [1,1,1,3,3,4,3,2,4,2]

print(c.containsDuplicate(nums1))
print(c.containsDuplicate(nums2))
print(c.containsDuplicate(nums3))

