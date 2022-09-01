# Q:695: https://leetcode.com/problems/max-area-of-island/

from typing import List

class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        visited, maximumArea = {}, 0

        def dfs(row, col):
            if row < 0 or row >= len(grid) or col < 0 or col >= len(grid[0]) or grid[row][col] == 0 or (row, col) in visited:
                return 0

            visited[(row, col)] = True

            directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]

            total = 0

            for dir in directions:
                newRow, newCol = row + dir[0], col + dir[1]

                total += dfs(newRow, newCol)
            
            return 1 + total


        for idx, _ in enumerate(grid):
            for colIdx, _col in enumerate(grid[0]):
                currentMax = dfs(idx, colIdx)
                maximumArea = max(currentMax, maximumArea)

        return maximumArea


c = Solution()


grid1 = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]


grid2 = [[0,0,0,0,0,0,0,0]]

print(c.maxAreaOfIsland(grid1))