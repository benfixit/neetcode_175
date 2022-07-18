from collections import Counter

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        sMap = self.__createMap(s)
        tMap = self.__createMap(t)

        for ch in tMap:
            if ch not in sMap or tMap[ch] != sMap[ch]:
                return False
        
        return True
    
    def __createMap(self, s: str) -> dict:
        map = dict()

        for ch in s:
            if ch not in map:
                map[ch] = 0
            
            map[ch] += 1
        return map


c = Solution()

s = "anagram"
t = "nagaram"

s1 = "rat"
t1 = "car"

print(c.isAnagram(s, t))
print(c.isAnagram(s1, t1))
