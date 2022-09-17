// Q:230 https://leetcode.com/problems/validate-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    const inorderList = [];
    
    const inorder = (node) => {
        if (node === null){
            return null;
        }
        
        inorder(node.left);
        
        inorderList.push(node.val);

        if (inorderList.length === k){
            return inorderList[k - 1]
        }
        
        inorder(node.right)
    }
        
    inorder(root)
    
    return inorderList[k - 1];
};

var kthSmallestWithIterativeInorder = function(root, k) {
    const inorderList = [];
    
    const iterativeInorder = (node) => {
        if (node === null){
            return null;
        }

        const stack = [];
        let current = node;

        while(stack.length || current) {
            if (current){
                stack.push(current)
                current = current.left;
            } else {
                current = stack.pop();
                inorderList.push(current.val);

                if (inorderList.length === k){
                    return inorderList[k - 1]
                }

                current = current.right;
            }
        }
    }
        
    iterativeInorder(root)
    
    return inorderList[k - 1];
};

class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

const root = new Node(5, new Node(3, new Node(2, new Node(1)), new Node(4)), new Node(6));

console.log(kthSmallest(root, 3));

