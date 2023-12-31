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
var getMinimumDifference = function(root) {
    let min = Number.MAX_SAFE_INTEGER;

    const dfs = (node) => {
        if (node === null){
            return null;
        }

        if (node.left){
            min = Math.min(min, Math.abs(node.val - node.left.val))
        }

        if (node.right){
            min = Math.min(min, Math.abs(node.val - node.right.val))
        }

        return Math.min(dfs(node.left), dfs(node.right));
    }

    dfs(root);

    return min;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1, null, new TreeNode(3, new TreeNode(2)))
console.log(getMinimumDifference(root));

root = new TreeNode(236, new TreeNode(104, null, new TreeNode(227)), new TreeNode(701, null, new TreeNode(911)))
console.log(getMinimumDifference(root));
