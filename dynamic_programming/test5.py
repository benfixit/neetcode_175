from typing import List

def howSum(target: int, nums: List[int]):
    def dfs(currentTarget: int, currentNums: List[int], memo = {}):
        if currentTarget in memo:
            # print("we got here == ", currentTarget, memo[currentTarget])
            return memo[currentTarget]

        if currentTarget == 0:
            return []

        if currentTarget < 0:
            return None

        for num in nums:
            newTarget = currentTarget - num
            currentNums.append(num)

            # print("== ", num, newTarget, currentTarget, currentNums)


            if dfs(newTarget, currentNums) != None:
                # memo[currentTarget] = currentNums
                return currentNums

            currentNums.pop()
            # print("popped == ", popped, currentNums)

        
        # print("====================== ", currentTarget, currentNums)
        # memo[currentTarget] = None
        return None
    
    return dfs(target, [])


# print(howSum(7, [2, 3]))
print(howSum(7, [5, 4, 3, 7]))
# print(howSum(7, [2, 4]))
# print(howSum(8, [2, 3, 5]))
# print(howSum(300, [7, 14]))