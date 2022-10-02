
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    const res = recurse(head, head);
    return res === null ? true : false
};

function recurse(node, startNode) {
    if (!node) {
        return startNode
    }
    const res = recurse(node.next, startNode);

    // console.log("res == ", res)
 
    // if (res === false) {
    //     return false
    // }
    
    return res.val === node.val ? res.next : false
}

const head = new ListNode(3, new ListNode(2, new ListNode(1)));

console.log(isPalindrome(head))
console.log(isPalindrome(null))


//  console.log("root == ", obj.root)
console.log("param_2 == ", obj.search("aa"))
//  console.log("param_2 == ", obj.search("a"))
//  console.log("param_2 == ", obj.search(".a"))
//  console.log("param_2 == ", obj.search("a."))


 // ["WordDictionary","addWord","addWord","search","search","search","search","search","search"]
// [[],["a"],["a"],["."],["a"],["aa"],["a"],[".a"],["a."]]
// [null,null,null,true,true,false,true,false,false]