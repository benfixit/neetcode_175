// Q:98 https://leetcode.com/problems/validate-binary-search-tree/
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
 * @return {boolean}
 */
 var isValidBST = function(root) {
    const isValidSubTree = (node, minValue, maxValue) => {
        if (node === null){
            return true;
        }
        
        if (node.val <= minValue || node.val >= maxValue) {
            return false;
        }
        
        return isValidSubTree(node.left, minValue, node.val) && isValidSubTree(node.right, node.val, maxValue)
    }
    
    return isValidSubTree(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
};

// [5,1,4,null,null,3,6]

class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

const root = new Node(5, new Node(1), new Node(4, new Node(3, new Node(6))))

console.log(isValidBST(root))