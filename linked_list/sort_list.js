// Q: 148 - https://leetcode.com/problems/sort-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
    if (!head){
        return null;
    }
    
    const arr = [];
    let current = head;
    
    while (current){
        arr.push(current.val);
        current = current.next;
    }
        
    arr.sort((a, b) => b - a);
    
    let node = new ListNode(arr.pop())
    const dummy = new ListNode("dummy", node);
        
    while (arr.length) {
        let nextVal = arr.pop();
        node.next = new ListNode(nextVal);
        
        node = node.next;
    }
    
    return dummy.next;
};