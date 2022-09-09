from typing import List

def permute(nums: List[int]) -> List[List[int]]:
        result = []
        n = len(nums)
        
        def backtrack(perm):
            if len(perm) == len(nums):
                result.append(perm.copy())
                return
            for i in range(n):
                # if nums[i] in perm:
                #     continue
                perm.append(nums[i])
                backtrack(perm)
                perm.pop()
        backtrack([])
        return result

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
            result = []
            
            if len(nums) == 1:
                return [nums[:]]

            for i in range(len(nums)):
                n = nums.pop(0)
                perms = self.permute(nums)

                for perm in perms:
                    perm.append(n)

                result.extend(perms)
                nums.append(n)

            return result

print(permute([1, 2, 3]))

# c = Solution()
# print(c.permute([1, 2, 3, 1]))