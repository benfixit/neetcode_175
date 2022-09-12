// Q:572 - https://leetcode.com/problems/subtree-of-another-tree/

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    if (subRoot === null){
        return true;
    }
    
    if (root === null){
        return false;
    }
    
    if (sameTree(root, subRoot)){
        return true;
    }
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

const sameTree = (root1, root2) => {
    if (root1 === null || root2 === null){
        return root1 === root2
    }

    if (root1.val !== root2.val){
        return false;
    }

    return sameTree(root1.left, root2.left) && sameTree(root1.right, root2.right);
}