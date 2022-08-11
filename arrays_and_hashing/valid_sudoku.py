# Q:36 - https://leetcode.com/problems/valid-sudoku/

from collections import defaultdict
from typing import List

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rowSet = defaultdict(set)
        colSet = defaultdict(set)
        gridSet = defaultdict(set)
        for i in range(0, len(board)):
            for j in range(0, len(board[i])):

                # row validation
                currentRowCell = board[i][j]
                if currentRowCell != "." and currentRowCell not in rowSet[i]:
                    rowSet[i].add(currentRowCell)
                elif currentRowCell in rowSet[i]:
                    return False

                
                # col validation
                currentColCell = board[j][i]
                if currentColCell != "." and currentColCell not in colSet[i]:
                    colSet[i].add(currentColCell)
                elif currentColCell in colSet[i]:
                    return False

                # grid validation
                key = tuple((i//3, j//3))
                if currentRowCell != "." and currentRowCell not in gridSet[key]:
                    gridSet[key].add(currentRowCell)
                elif currentRowCell in gridSet[key]:
                    return False

        return True


board1 = [["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]

board2 = [["8","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]

c = Solution()

print(c.isValidSudoku(board1))
print(c.isValidSudoku(board2))