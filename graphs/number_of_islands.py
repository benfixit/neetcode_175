# Q:200: https://leetcode.com/problems/number-of-islands/

from typing import List

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        visited = {}
        numberOfIslands = 0

        def dfs(row, col):
            if row < 0 or row >= len(grid) or col < 0 or col >= len(grid[0]) or (row, col) in visited or grid[row][col] == "0":
                return 0

            visited[(row, col)] = True

            directions = [[1,0], [0, 1], [-1, 0], [0, -1]]

            for dir in directions:
                newRow, newCol = dir[0] + row, dir[1] + col

                dfs(newRow, newCol)

            return 1

        for rowIndex, _ in enumerate(grid):
            for colIndex, _col in enumerate(grid[0]):
                if grid[rowIndex][colIndex] == "1":
                    numberOfIslands += dfs(rowIndex, colIndex)

        print(visited)
        return numberOfIslands



c = Solution()

grid = [
  ["1","1"],
  ["1","0"],
]
print(c.numIslands(grid))

# grid1 = [
#   ["1","1","1","1","0"],
#   ["1","1","0","1","0"],
#   ["1","1","0","0","0"],
#   ["0","0","0","0","0"]
# ]
# print(c.numIslands(grid1))

# grid2 = [
#   ["1","1","0","0","0"],
#   ["1","1","0","0","0"],
#   ["0","0","1","0","0"],
#   ["0","0","0","1","1"]
# ]
# print(c.numIslands(grid2))
