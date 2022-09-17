class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

var goodNodes = function(root) {
    let goodNodes = 1;
    
    const dfs = (node, maxValue) => {
        if (node === null){
            return node;
        }
        
        const left = dfs(node.left, Math.max(node.val, maxValue))
        // console.log("left == ", left)
        
        if (left && left.val >= maxValue){
            console.log("left val == ", left.val, node.val, maxValue)
            goodNodes++
        }
        
        const right = dfs(node.right, Math.max(node.val, maxValue))

        // console.log("right == ", right)
        
        if (right && right.val >= maxValue){
            console.log("right val == ", right.val, node.val, maxValue)
            goodNodes++
        }
        
        return node;
    }
    
    dfs(root, root.val)
    
    return goodNodes;
};

// const nodes = [2,null,4,10,8,null,null,4]
// [3,1,4,3,null,1,5]

const root = new Node(2, null, new Node(4, new Node(10), new Node(8, new Node(4))));

// const root = new Node(3, new Node(1, new Node()), new Node(4, new Node(10), new Node(8, new Node(4))));


console.log(goodNodes(root));