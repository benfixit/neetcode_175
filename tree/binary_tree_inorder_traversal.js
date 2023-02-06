//Q:94 - https://leetcode.com/problems/binary-tree-inorder-traversal
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    const stack = [];

    let current = root;

    while (stack.length || current){
        if (current){
            stack.push(current);
            current = current.left;
        } else {
            current = stack.pop();
            result.push(current.val);

            current = current.right;
        }
    }
    
    return result;
};

var inorderTraversalRecursive = function(root) {
    const result = [];

    const dfs = (node) => {
        if (!node){
            return;
        }
    
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }

    dfs(root);
    
    return result;
};