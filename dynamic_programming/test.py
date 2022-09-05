# def gridTraveler(row, col, memo = {}):
#     if (row, col) in memo:
#         return memo[(row, col)]

#     if row == 0 or col == 0:
#         return 0

#     if row == 1 and col == 1:
#         return 1

#     memo[(row, col)] = gridTraveler(row - 1, col) + gridTraveler(row, col - 1)

#     return memo[(row, col)]



# # print(fib(3))
# print(gridTraveler(1, 1))
# print(gridTraveler(2, 3))
# print(gridTraveler(3, 2))
# print(gridTraveler(3, 3))
# print(gridTraveler(18, 18))
# # print(fib(50))

word = "Hello World"
newWord = word[5:]
print(word, ":::", newWord)