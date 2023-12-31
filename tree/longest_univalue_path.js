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
var longestUnivaluePath = function(root) {
    let max = 0;

    const dfs = (node) => {
        if (node === null){
            return 0;
        }

        let leftPath = dfs(node.left);

        let rightPath = dfs(node.right);

        let left = 0, right = 0;

        if (node.left && node.left.val === node.val){
            left = leftPath + 1;
        }

        if (node.right && node.right.val === node.val){
            right = rightPath + 1;
        }

        max = Math.max(max, left + right);

        return Math.max(left, right);
    }

    dfs(root);

    return max;
};

// var longestUnivaluePath = function(root) {
//     let max = 0
//     function dfs(node) {
//         if (!node) {
//             return [null, 0]
//         }
//         const [leftVal, leftPath] = dfs(node.left)
//         const [rightVal, rightPath] = dfs(node.right)
//         if (node.val === leftVal && node.val === rightVal) {
//             max = Math.max(max, leftPath + rightPath)
//             const longestPath = Math.max(leftPath, rightPath)
//             return [node.val, longestPath + 1]
//         } else if (node.val === leftVal) {
//             max = Math.max(max, leftPath)
//             return [node.val, leftPath + 1]
//         } else if (node.val === rightVal) {
//              max = Math.max(max, rightPath)
//             return [node.val, rightPath + 1]
//         } else {
//             max = Math.max(max, 0)
//             return [node.val, 1]
//         }

//     }
//     dfs(root)
//     return max
// };

// var longestUnivaluePath = function(root) {
//     const dfs = (node, value, pos) => {
//         if (node === null){
//             return 0;
//         }

//         const left = dfs(node.left, node.val, "left");

//         const right = dfs(node.right, node.val, "right");

//         const max = Math.max(left, right);

//         console.log(`${pos} call:::`, "left: ", left, "right: ", right, "node val: ", node.val, "parent value: ", value, "max: ", max);

//         return node.val === value ? 1 + max : 0 + max;
//     }

//     return dfs(root, Number.MAX_SAFE_INTEGER, "root");
// };


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1, null, new TreeNode(2, null, null));
console.log(longestUnivaluePath(root))

root = new TreeNode(1, new TreeNode(2), new TreeNode(1, null, null));
console.log(longestUnivaluePath(root))

root = new TreeNode(1, new TreeNode(4, new TreeNode(4), new TreeNode(4)), new TreeNode(5, null, new TreeNode(5)));
console.log(longestUnivaluePath(root))

root = new TreeNode(5, new TreeNode(4, new TreeNode(1), new TreeNode(1)), new TreeNode(5, null, new TreeNode(5)))
console.log(longestUnivaluePath(root))

root = new TreeNode(1, null, new TreeNode(1, new TreeNode(1, new TreeNode(1), new TreeNode(1)), new TreeNode(1, null, new TreeNode(1))))
console.log(longestUnivaluePath(root))

// var longestUnivaluePath = function(root) {
//     const dfs = (node, value) => {
//         if (node === null){
//             return 0;
//         }

//         if (
//             node.left === null && 
//             node.right === null
//         ){
//             if (node.val !== value){
//                 return -1;
//             } else {
//                 return 0;
//             }
            
//         }

//         const left = longestUnivaluePath(node.left, node.val);
//         const right = longestUnivaluePath(node.right, node.val);

//         return 1 + Math.max(left, right);
//     }

//     return dfs(root, root?.val);
// };