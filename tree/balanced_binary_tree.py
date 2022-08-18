# Q:110 - https://leetcode.com/problems/balanced-binary-tree/

from typing import Optional
from index import TreeNode

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def balanced(node: Optional[TreeNode]):
            if not node:
                return (True, 0)
            
            left, right = balanced(node.left), balanced(node.right)

            height = 1 + max(left[1], right[1])
            isBal = abs(left[1] - right[1]) <= 1 and left[0] and right[0]

            return (isBal, height)
        
        return balanced(root)[0]


c = Solution()

# root1 = [3,9,20,None,None,15,7]
# root2 = [1,2,2,3,3,null,null,4,4]
# root3 = []
root1 = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
root2 = TreeNode(1, TreeNode(2, TreeNode(3, TreeNode(4), TreeNode(4)), TreeNode(3)), TreeNode(2))
root3 = None


print(c.isBalanced(root1))
print(c.isBalanced(root2))
print(c.isBalanced(root3))