def headRecursion(num):
    if num == -1:
        return
    
    headRecursion(num - 1)
    print(num)


def tailRecursion(num):
    if num == -1:
        return "test"

    print(num)
    return str(1) + tailRecursion(num - 1)


# headRecursion(4)
# print("=========")
data = tailRecursion(4)
print(data)