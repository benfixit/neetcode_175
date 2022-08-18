# Q:199 - https://leetcode.com/problems/binary-tree-right-side-view/

from typing import Optional, List
from index import TreeNode

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        queue, result = [], []

        queue.append(root)

        while queue:
            pass


c = Solution()

# root1 = [1,2,3,null,5,null,4]
# root2 = [1,null,3]
# root3 = []
root1 = TreeNode(1, TreeNode(2, None, TreeNode(5)), TreeNode(3, None, TreeNode(4)))
root2 = TreeNode(1, None, TreeNode(3))
root3 = None


print(c.levelOrder(root1))
print(c.levelOrder(root2))
print(c.levelOrder(root3))