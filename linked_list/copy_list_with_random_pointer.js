// Q:138 https://leetcode.com/problems/copy-list-with-random-pointer/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    let current = head;
    let oldToNew = new Map([[null, null]]);
    
    while (current !== null){
        const copy = new Node(current.val);
        oldToNew.set(current, copy)
        current = current.next;
    }
    
    current = head;
        
    while (current !== null){
        const copy = oldToNew.get(current);
        copy.next = oldToNew.get(current.next);
        copy.random = oldToNew.get(current.random);
        
        current = current.next;
    }
    
    return oldToNew.get(head)
};