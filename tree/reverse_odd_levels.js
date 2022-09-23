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
 * @return {TreeNode}
 */
 var reverseOddLevels = function(root) {
    let level = 0;
    const queue = [];
    
    queue.push(root);
    
    while(queue.length){
        const len = queue.length;
        const currentList = [];
        level += 1;
                
        for(let i = 0; i < len; i++){
            let current = queue.shift();
            
            currentList.push(current)
            
            if (current.left){
                queue.push(current.left)
            }
            
            if (current.right){
                queue.push(current.right)
            }
        }
        
        if (level % 2 === 0){
            for (let i = 0; i < currentList.length / 2; i++){
                const temp = currentList[i].val;
                currentList[i].val = currentList[currentList.length - 1 - i].val
                currentList[currentList.length - 1 - i].val = temp;
            }
        }        
    }
    
    return root;
};