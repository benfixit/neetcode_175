//Q:105 https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
        if (preorder.length === 0 || inorder.length === 0){
            return null;
        }
        
        const root = new TreeNode(preorder[0]);

        const nodeIndex = inorder.findIndex((item) => item === preorder[0])

        root.left = buildTree(preorder.slice(1, nodeIndex + 1), inorder.slice(0, nodeIndex))
        root.right = buildTree(preorder.slice(nodeIndex + 1), inorder.slice(nodeIndex + 1))
}
    

 var buildTreeOld = function(preorder, inorder) {
    const builder = (preorderList, inorderList) => {
        if (preorderList.length === 0 || inorderList.length === 0){
            return null;
        }
        
        const nodeValue = preorderList[0];

        const nodeIndex = inorderList.findIndex((item) => item === nodeValue)

        const leftList = inorderList.slice(0, nodeIndex);
        const rightList = inorderList.slice(nodeIndex + 1)

        const sliceIndex = leftList.length > 0 ? 1 : 0
        
        const left = builder(preorderList.slice(sliceIndex), leftList)

        const right = builder(preorderList.slice(sliceIndex + 1), rightList)

        return new TreeNode(nodeValue, left, right);
    }
    
    return builder(preorder, inorder);
};

// console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))
console.log(buildTree([1, 2], [1, 2]))