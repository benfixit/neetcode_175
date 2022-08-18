# Q:226 - https://leetcode.com/problems/invert-binary-tree/

from typing import Optional
from index import TreeNode

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        def invert(node: Optional[TreeNode]):
            if not node:
                return
            
            left = invert(node.left)
            right = invert(node.right)

            node.left, node.right = right, left

            return node
        
        return invert(root)


c = Solution()

# root1 = [4,2,7,1,3,6,9]
# root2 = [2,1,3]
# root3 = []

root1 = TreeNode(4, TreeNode(2, TreeNode(1), TreeNode(3)), TreeNode(7, TreeNode(6), TreeNode(9)))
invertedTree1 = c.invertTree(root1)

root2 = TreeNode(2, TreeNode(1), TreeNode(3))
invertedTree2 = c.invertTree(root2)

root3 = None
invertedTree3 = c.invertTree(root3)

