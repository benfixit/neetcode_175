from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def preOrder(root: Optional[TreeNode]):
    if root:
        print(root.val)
        preOrder(root.left)
        preOrder(root.right)