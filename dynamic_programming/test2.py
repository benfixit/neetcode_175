result = []

def canSum(target, nums):
    if target == 0:
        print("we got here!!!")
        return True

    if target < 0:
        return False

    for num in nums:
        newTarget = target - num

        print("num == ", target, num, newTarget)

        if(canSum(newTarget, nums)):
            return True
        # else:
        #     print("I returned false == ", num, newTarget)
    
    print("=====================")
        
    return False


print(canSum(7, [5, 3, 4, 7]))

# print(canSum(7, [2, 4]))