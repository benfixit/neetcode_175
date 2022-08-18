# Q:235 - https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

from typing import Optional
from index import TreeNode

class Solution:
    def lowestCommonAncestor(self, root: Optional[TreeNode], p: Optional[TreeNode], q: Optional[TreeNode]) -> Optional[TreeNode]:
        pass


c = Solution()

# root1 = [6,2,8,0,4,7,9,None,None,3,5], p1 = 2, q1 = 4

# root = [2,1], p = 2, q = 1

root1 = TreeNode(6, TreeNode(2, TreeNode(0), TreeNode(4, TreeNode(3), TreeNode(5))), TreeNode(8, TreeNode(7), TreeNode(9)))
p1 = 2
q1 = 8

root2 = TreeNode(6, TreeNode(2, TreeNode(0), TreeNode(4, TreeNode(3), TreeNode(5))), TreeNode(8, TreeNode(7), TreeNode(9)))
p2 = 2
q2 = 4

root3 = TreeNode(2, TreeNode(1))
p3 = 2
q3 = 1

c.lowestCommonAncestor(root1, p1, q1)
# c.lowestCommonAncestor(root2, p2, q2)
# c.lowestCommonAncestor(root3, p3, q3)