# Q:3 - https://leetcode.com/problems/longest-substring-without-repeating-characters/

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        map = {}
        longest = 0
        left, right = 0, 0

        while right < len(s):
            if s[right] not in map:
                map[s[right]] = 1
            else:
                # remove the char at left while the char at right is in the map
                while s[right] in map:
                    map.pop(s[left])
                    left += 1
                map[s[right]] = 1

            longest = max(longest, right - left + 1)
            right += 1

        return longest


c = Solution()

s1 = "abcabcbb"
s2 = "bbbbb"
s3 = "pwwkew"
s4 = "dvdf"

print(c.lengthOfLongestSubstring(s1))
print(c.lengthOfLongestSubstring(s2))
print(c.lengthOfLongestSubstring(s3))
print(c.lengthOfLongestSubstring(s4))