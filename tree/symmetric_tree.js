//Q:101 - https://leetcode.com/problems/symmetric-tree/
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
 * @return {boolean}
 */
var isSymmetric = function(root) {    
    if (!root){
        return false;
    }

    let symmetric = true;
    const queue = [];
    queue.push(root);

    while (queue.length){
        const queueLen = queue.length;
        let temp = [];

        for(let i = 0; i < queueLen; i++){
            let current = queue.shift();

            temp.push(current?.val);

            if (!current){
                continue;
            }

            queue.push(current.left);

            queue.push(current.right);
        }

        let left = 0, right = temp.length - 1;

        while(left < right){
            if (temp[left] !== temp[right]){
                symmetric = false;
                break;
            }

            left += 1;
            right -= 1;
        }

        if(!symmetric){
            break;
        }
    }

    return symmetric;
};