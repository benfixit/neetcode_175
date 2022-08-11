# Q:74 - https://leetcode.com/problems/search-a-2d-matrix/

from typing import List

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        indexLeft, indexRight = 0, len(matrix) - 1
        searchIndex = 0

        while indexLeft <= indexRight:
            mid = indexLeft + (indexRight - indexLeft) // 2
            currentMin, currentMax = matrix[mid][0], matrix[mid][len(matrix[0]) - 1]

            if currentMin < target and currentMax < target:
                indexLeft = mid + 1
            elif currentMin > target and currentMax > target:
                indexRight = mid - 1
            else:
                searchIndex = mid
                break

        left, right = 0, len(matrix[0]) - 1

        while left <= right:
            mid = left + (right - left) // 2

            current = matrix[searchIndex][mid]

            if current > target:
                right = mid - 1
            elif current < target:
                left = mid + 1
            else:
                return True
        
        return False


c = Solution()

matrix1 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target1 = 3

matrix2 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target2 = 13

matrix3 = [[1], [3]]
target3 = 3

matrix4 = [[1,3,5,7],[10,11,16,20],[23,30,34,50]]
target4 = 30

print(c.searchMatrix(matrix1, target1))
print(c.searchMatrix(matrix2, target2))
print(c.searchMatrix(matrix3, target3))
print(c.searchMatrix(matrix4, target4))