# Q:347 - https://leetcode.com/problems/top-k-frequent-elements/
from typing import List
from collections import Counter
from sys import maxsize

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        map = Counter(nums)
        result = []

        temp = [[] for _ in range(0, len(nums))]

        for num, count in map.items():
            temp[count - 1].append(num)

        for index in range(len(temp) - 1, -1, -1):
            item = temp[index]
            if not item:
                continue
            for num in item:
                result.append(num)
                if len(result) == k:
                    return result

        return result

    def topKFrequent2(self, nums: List[int], k: int) -> List[int]:
        map = Counter(nums)
        result = []
        # create a copy of map

        while True:
            currentMax = -maxsize
            currentNum = -1
            
            for num, count in map.items():
                if count > currentMax:
                    currentNum = num
                    currentMax = count
            
            result.append(currentNum)
            map[currentNum] = -1

            if len(result) == k:
                break



        return result


c = Solution()

nums1 = [1, 1, 1, 2, 3, 2, 100, 50]
k1 = 2

nums2 = [1]
k2 = 1

print(c.topKFrequent(nums1, k1))
print(c.topKFrequent(nums2, k2))

print("=======================")

print(c.topKFrequent(nums1, k1))
print(c.topKFrequent(nums2, k2))




