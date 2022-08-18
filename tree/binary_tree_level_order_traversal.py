# Q:102 - https://leetcode.com/problems/binary-tree-level-order-traversal/

from typing import Optional, List
from index import TreeNode

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        queue, result = [], []

        queue.append(root)

        while queue:
            currList = []
            queueLength = len(queue)

            for _ in range(0, queueLength):
                node = queue.pop(0)
                if node:
                    currList.append(node.val)

                    if node.left:
                        queue.append(node.left)

                    if node.right:
                        queue.append(node.right)
                
            if currList: result.append(currList)

        return result

c = Solution()

# root1 = [3,9,20,null,null,15,7]
# root2 = [1]
# root3 = []
root1 = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
root2 = TreeNode(1)
root3 = None


print(c.levelOrder(root1))
print(c.levelOrder(root2))
print(c.levelOrder(root3))