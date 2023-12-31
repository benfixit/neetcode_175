class Node {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const postOrderRecursive = (node) => {
    if (!node){
        return null
    }


    postOrderRecursive(node.left);

    postOrderRecursive(node.right);

    console.log(node.value);
}

const postOrderIterative = (node) => {
    if (!node){
        return;
    }

    const stack = [];
    const output = []

    stack.push(node);

    while(stack.length){
        let current = stack.pop();

        output.push(current.value)

        if (current.left){
            stack.push(current.left)
        }

        if (current.right){
            stack.push(current.right)
        }
    }

    console.log("output == ", output)

    // [4, 5, 6]
    //out [1, 2, 3, 4]

    while(output.length){
        let current = output.pop();

        console.log(current)
    }
}

const root = new Node(3, new Node(5, new Node(6), new Node(7)), new Node(1, new Node(4), new Node(2, new Node(9), new Node(8))));
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.right.left = new Node(5);
// root.right.right = new Node(6);
// root.right.left.left = new Node(7);
// root.right.left.right = new Node(8);
 
postOrderIterative(root);
// console.log("SPACE IN BETWEEN")
// postOrderRecursive(root);