// Q: 234 - https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let slow = head, fast = head.next;
    
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let secondHalf = slow.next;
    slow.next = null;
    let firstHalf = head;
    
    let prev = null, current = secondHalf;
    
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    while (prev && firstHalf){
        if (prev.val !== firstHalf.val){
            return false;
        }
        
        prev = prev.next;
        firstHalf = firstHalf.next;
    }
    
    return true;
};


var isPalindrome2 = function(head) {
    return recurse(head, head) === null;
};

function recurse(node, startNode) {
    if (!node) {
        return startNode
    }
    const res = recurse(node.next, startNode);
    
    return res.val === node.val ? res.next : false
}