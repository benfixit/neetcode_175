# Q:49 - https://leetcode.com/problems/group-anagrams/

from typing import List
from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = defaultdict(list)
        for str in strs:
            charList = [0] * 26
            for ch in str:
                index = ord(ch) - ord("a")
                charList[index] += 1
            

            key = tuple(charList)

            map[key].append(str)

        return list(map.values())

c = Solution()

strs1 = ["eat","tea","tan","ate","nat","bat"]
strs2 = ["a"]

print(c.groupAnagrams(strs1))
print(c.groupAnagrams(strs2))
