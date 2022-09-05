from typing import List

def combinationSum(nums: List[int], target: int):
    result = []

    def dfs(currentList: List[int], currentTarget: int):
        if currentTarget == 0:
            result.append(currentList.copy())

        if currentTarget < 0:
            return

        for num in nums:
            newTarget = currentTarget - num
            currentList.append(num)

            print("print === ", num, newTarget, currentList)

            dfs(currentList, newTarget)

            currentList.pop()

        return

    dfs([], target)

    return result

print(combinationSum([2,3,6,7], 7))
 
# print(combinationSum([2,3,5], 8))

# print(combinationSum([2], 1))

