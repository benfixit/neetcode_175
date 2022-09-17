// # Q:199 - https://leetcode.com/problems/binary-tree-right-side-view/

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
 var rightSideView = function(root) {
    const result = []
    if (root === null){
        return result;
    }
    
    const queue = [root];
    
    
    while (queue.length) {
        const len = queue.length;
        const currentList = [];
        
        for (let i = 0; i < len; i++){
            const current = queue.shift();
        
            currentList.push(current.val)

            if (current.left){
                queue.push(current.left)
            }

            if (current.right){
                queue.push(current.right)
            }
        }
        
        result.push(currentList[currentList.length - 1])
        
    }
    
    return result;
};