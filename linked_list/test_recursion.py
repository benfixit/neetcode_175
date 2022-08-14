def headRecursion(num):
    if num == -1:
        return
    
    headRecursion(num - 1)
    print(num)


def tailRecursion(num):
    if num == -1:
        return

    print(num)
    tailRecursion(num - 1)


headRecursion(4)
print("=========")
tailRecursion(4)