// # Q:1448 - https://leetcode.com/problems/count-good-nodes-in-binary-tree/

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
 * @return {number}
 */
 var goodNodes = function(root) {    
    const dfs = (node, maxValue) => {
        if (node === null){
            return 0;
        }

        const count = node.val >= maxValue ? 1 : 0;

        maxValue = Math.max(maxValue, node.val);

        return count + dfs(node.left, maxValue) + dfs(node.right, maxValue)    
    }
    
    return dfs(root, root.val)
};
