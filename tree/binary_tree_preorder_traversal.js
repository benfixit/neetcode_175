//Q:144 - https://leetcode.com/problems/binary-tree-preorder-traversal
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
var preorderTraversal = function(root) {
    const stack = [];
    const result = [];
    stack.push(root);

    while(stack.length){
        let current = stack.pop();
        if (current){
            result.push(current.val);

            if(current.right){
                stack.push(current.right);
            }

            if(current.left){
                stack.push(current.left);
            }
        }
    }

    return result;
};