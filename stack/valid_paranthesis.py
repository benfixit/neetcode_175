# Q:20 - https://leetcode.com/problems/valid-parentheses/
class Solution:
    def isValid(self, s: str) -> bool:
        stack = list()
        map = {")": "(", "]": "[", "}": "{"}

        for br in s:
            if br == "(" or br == "[" or br == "{":
                stack.append(br)
            elif br in map and stack and stack[-1] == map[br]:
                stack.pop()
            else:
                return False

        return len(stack) == 0



c = Solution()

print(c.isValid("()"))
print(c.isValid("()[]{}"))
print(c.isValid("(]"))