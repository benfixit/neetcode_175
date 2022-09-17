// Q:543 - https://leetcode.com/problems/diameter-of-binary-tree/

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
 var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    
    const dfs = (node) => {
        if (node === null){
            return 0;
        }
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        maxDiameter = Math.max(maxDiameter, left + right);
        
        return 1 + Math.max(left, right)
    }
    
    dfs(root)
    
    return maxDiameter;
};