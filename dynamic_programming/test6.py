from typing import List
from sys import maxsize

def bestSum(target: int, nums: List[int]):
    best = None

    def dfs(currentTarget: int, currentList: List[int], memo = {}):
        nonlocal best

        if currentTarget in memo:
            return memo[currentTarget]

        if currentTarget == 0:
            return []
        
        if currentTarget < 0:
            return None

        for num in nums:
            newTarget = currentTarget - num
            currentList.append(num)

            if dfs(newTarget, currentList, memo) != None:
                # memo[newTarget] = currentList
                if not best or len(currentList) < len(best):
                    best = currentList.copy()

            currentList.pop()

        memo[currentTarget] = None
        return None

    
    dfs(target, [])

    return best


# print(bestSum(7, [5, 3, 4, 7]))
# print(bestSum(8, [2, 3, 5]))
print(bestSum(8, [1, 4, 5]))
# print(bestSum(100, [1, 2, 5, 25]))