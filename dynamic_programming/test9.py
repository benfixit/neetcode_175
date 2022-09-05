# def fib(n: int) -> int:
#     arr = [0] * (n + 1)

#     arr[0] = 0
#     arr[1] = 1

#     for index in range(2, n + 1):
#         arr[index] = arr[index - 1] + arr[index - 2]
    
#     return arr[n]


def fib(n: int) -> int:
    arr = [0] * (n + 1)

    arr[1] = 1

    for index in range(n + 1):
        arr[index + 1] += arr[index]
        arr[index + 2] += arr[index]

    print("arr == ", arr)
    
    return arr[n]

print(fib(6))