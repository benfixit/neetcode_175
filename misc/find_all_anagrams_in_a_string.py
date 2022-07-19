#Q: 438 https://leetcode.com/problems/find-all-anagrams-in-a-string/

from typing import List

class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        result = []
        if len(p) > len(s):
            return result

        left, right = 0, 0

        pMap = self.__createMap(p)
        newWindowStrMap = {}

        while right < len(s):
            currentWindow = right - left + 1
            

            if currentWindow == len(p):
                newWindowStr = s[left:right + 1]
                if left == 0:
                    newWindowStrMap = self.__createMap(newWindowStr)
                else:
                    newWindowStrMap = self.__updateMap(newWindowStrMap, s[left - 1], s[right])

                #check if they are anagrams
                if self.__isAnagram(newWindowStrMap, pMap):
                    result.append(left)
                
                left += 1

            right += 1
        
        return result

    def __isAnagram(self, str1, str2):
        for ch in str1:
            if ch not in str2 or str1[ch] != str2[ch]:
                return False
        return True

    def __createMap(self, str):
        map = {}

        for ch in str:
            map[ch] = map.get(ch, 0) + 1

        return map

    def __updateMap(self, map: dict, removeCh, addCh):

        map[removeCh] = map.get(removeCh, 0) - 1
        if map[removeCh] == 0:
            map.pop(removeCh)
        map[addCh] = map.get(addCh, 0) + 1

        return map


c = Solution()

s1 = "cbaebabacd"
p1 = "abc"

s2 = "abab"
p2 = "ab"

print(c.findAnagrams(s1, p1))
print(c.findAnagrams(s2, p2))


        