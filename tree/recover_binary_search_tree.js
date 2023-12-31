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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    const dfs = (node, minValue, maxValue) => {
        if (node === null){
            return null;
        }

        if (node.val < maxValue && node.val >= minValue){
            return true;
        }

        dfs(node.left, minValue, node.val);

        const maybeBad = 
        dfs(node.right, node.val, maxValue);
    }

    return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};