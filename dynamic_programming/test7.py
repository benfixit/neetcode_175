from typing import List

def bestSum(target: int, nums: List[int], memo = {}, currentList = []):
    if target in memo:
        return memo[target]

    if target == 0:
        return []
    
    if target < 0:
        return None

    best = None

    for num in nums:
        newTarget = target - num
        currentList.append(num)

        if bestSum(newTarget, nums, memo, currentList) != None:
            # memo[newTarget] = currentList
            if not best or len(currentList) < len(best):
                best = currentList.copy()

        currentList.pop()

    memo[target] = best
    return best


# print(bestSum(7, [5, 3, 4, 7]))
# print(bestSum(8, [2, 3, 5]))
print(bestSum(8, [1, 4, 5]))
print(bestSum(100, [1, 2, 5, 25]))