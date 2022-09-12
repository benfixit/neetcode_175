class Node {
    constructor(value){
        this.value = value;
    }
}

const inOrderRecursive = (node) => {
    if (!node){
        return null
    }


    inOrderRecursive(node.left);

    console.log(node.value);

    inOrderRecursive(node.right);
}

const inOrderIterative = (node) => {
    if (!node){
        return;
    }

    const stack = [];

    let current = node;

    // stack.push(node);

    while(stack.length || current){
        if(current){
            stack.push(current)
            current = current.left;
        } else {
            current = stack.pop();

            console.log(current.value);

            current = current.right;
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
 
inOrderIterative(root);
console.log("SPACE IN BETWEEN")
inOrderRecursive(root);