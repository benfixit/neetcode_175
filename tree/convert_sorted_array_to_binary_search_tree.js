//Q:108 - https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length){
        return null;
    }

    const dfs = (nums) => {
        if (!nums.length){
            return null;
        }

        const rootIndex = Math.floor(nums.length / 2);

        const rootVal = nums[rootIndex];
        
        const left = dfs(nums.slice(0, rootIndex));
        const right = dfs(nums.slice(rootIndex + 1));

        return new TreeNode(rootVal, left, right);
    }

    return dfs(nums);
};