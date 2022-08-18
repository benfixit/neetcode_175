# Q:104 - https://leetcode.com/problems/maximum-depth-of-binary-tree/

from typing import Optional
from index import TreeNode

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        def depth(node: Optional[TreeNode]):
            if not node:
                return 0
            
            leftDepth = 1 + depth(node.left)
            rightDepth = 1 + depth(node.right)

            return max(leftDepth, rightDepth)
        
        return depth(root)


c = Solution()

# root1 = [3,9,20,null,null,15,7]
# root2 = [1,null,2]

root1 = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
root2 = TreeNode(1, None, TreeNode(2))

print(c.maxDepth(root1))
print(c.maxDepth(root2))

