class Node {
    constructor(value){
        this.value = value;
    }
}

const preOrderRecursive = (node) => {
    if (!node){
        return null
    }

    console.log(node.value);

    preOrderRecursive(node.left);

    preOrderRecursive(node.right);
}

const preOrderIterative = (node) => {
    if (!node){
        return;
    }

    const stack = [];

    stack.push(node);

    while(stack.length){
        const current = stack.pop();

        console.log(current.value);

        if (current.right){
            stack.push(current.right)
        }

        if (current.left){
            stack.push(current.left)
        }
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
root.right.left.left = new Node(7);
root.right.left.right = new Node(8);
 
preOrderIterative(root);
console.log("SPACE IN BETWEEN")
preOrderRecursive(root);