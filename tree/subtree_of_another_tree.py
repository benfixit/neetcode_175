# Q:572 - https://leetcode.com/problems/subtree-of-another-tree/

from logging import root
from typing import Optional
from index import TreeNode

class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        pass
        

c = Solution()

# root1 = [3,4,5,1,2]
# subRoot1 = [4,1,2]

# root2 = [3,4,5,1,2,None,None,None,None,0]
# subRoot2 = [4,1,2]

# root3 = [1, 1]
# subRoot3 = [1]

root1 = TreeNode(3, TreeNode(4, TreeNode(1), TreeNode(2)), TreeNode(5))
subRoot1 = TreeNode(4, TreeNode(1), TreeNode(2))

root2 = TreeNode(3, TreeNode(4, TreeNode(1), TreeNode(2, TreeNode(0))), TreeNode(5))
subRoot2 = TreeNode(4, TreeNode(1), TreeNode(2))

root3 = TreeNode(1, TreeNode(1))
subRoot3 = TreeNode(1)

root4 = TreeNode(1)
subRoot4 = TreeNode(0)

# print(c.isSubtree(root1, subRoot1))
# print(c.isSubtree(root2, subRoot2))
# print(c.isSubtree(root3, subRoot3))
print(c.isSubtree(root4, subRoot4))
