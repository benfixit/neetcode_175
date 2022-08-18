# Q:100 - https://leetcode.com/problems/same-tree/

from typing import Optional
from index import TreeNode

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p or not q:
            return p == q
        
        if p.val != q.val:
            return False

        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)

c = Solution()

# p1 = [1,2,3], q1 = [1,2,3]
# p2 = [1,2], q2 = [1,null,2]
# p3 = [1,2,1], q3 = [1,1,2]
p1 = TreeNode(1, TreeNode(2), TreeNode(3))
q1 = TreeNode(1, TreeNode(2), TreeNode(3))

p2 = TreeNode(1, TreeNode(2))
q2 = TreeNode(1, None, TreeNode(2))

p3 = TreeNode(1, TreeNode(2), TreeNode(1))
q3 = TreeNode(1, TreeNode(1), TreeNode(3))

print(c.isSameTree(p1, q1))
print(c.isSameTree(p2, q2))
print(c.isSameTree(p3, q3))
