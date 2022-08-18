# Q:543 - https://leetcode.com/problems/diameter-of-binary-tree/

from typing import Optional
from index import TreeNode

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        def dfs(node: Optional[TreeNode]): 
            nonlocal diameter
            if node is None: 
                return 0

            left = dfs(node.left)
            right = dfs(node.right)
            
            print("calculating diameter", left, right, max(left + right, diameter), node.val)
            diameter = max(left + right, diameter)
            
            print("returning diameter", left, right, max(left, right) + 1, node.val)
            return max(left, right) + 1
            
                    
        diameter = 0
        dfs(root)
        return diameter


c = Solution()

# root1 = [1,2,3,4,5]
# root2 = [1,2]

root1 = TreeNode(1, TreeNode(2, TreeNode(4), TreeNode(5)), TreeNode(3))
root2 = TreeNode(1, TreeNode(2), None)

# print(c.diameterOfBinaryTree(root1))
print(c.diameterOfBinaryTree(root2))