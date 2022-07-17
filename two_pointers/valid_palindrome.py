# Q:125 - https://leetcode.com/problems/valid-palindrome/

class Solution:
    def isPalindrome(self, s: str) -> bool:
        # convert s to all lowercase
        message = s.lower()

        left, right = 0, len(message) - 1

        while(left < right):
            # if chars at left and right positon are both alphanumeric
            if self.__isAlphanumeric(message[left]) and self.__isAlphanumeric(message[right]):
                if message[left] == message[right]:
                    left += 1
                    right -= 1
                    continue
                else:
                    return False
            elif not self.__isAlphanumeric(message[left]):
                left += 1
            elif not self.__isAlphanumeric(message[right]):
                right -= 1

        return True

    #Return true/false is a char is alphanumeric
    #numbers 0 - 9 range from 48 to 57 while alphabets range from
    #97 to 122
    def __isAlphanumeric(self, char):
        # get the ascii value of character as an int
        num = ord(char)

        return (num >= 48 and num <= 57) or (num >=97 and num <= 122)


c = Solution()

s1 = "A man, a plan, a canal: Panama"
s2 = "race a car"
s3 = " "

print(c.isPalindrome(s1))
print(c.isPalindrome(s2))
print(c.isPalindrome(s3))