# Q:242 - https://leetcode.com/problems/valid-anagram/

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
    
    # creates a map of the string character against their frequency of occurence
    def __createMap(self, s: str) -> dict:
        map = dict()

        for ch in s:
            map[ch] = map.get(ch, 0) + 1

        return map


c = Solution()

s = "anagram"
t = "nagaram"

s1 = "rat"
t1 = "car"

print(c.isAnagram(s, t))
print(c.isAnagram(s1, t1))
