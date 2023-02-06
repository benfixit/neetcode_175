//Q:83 - https://leetcode.com/problems/remove-duplicates-from-sorted-list/
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
var deleteDuplicates = function(head) {
    let current = head;

    while(current !== null){
        let start = current;

        while (start && start.next && start.val === start.next.val){
            start = start.next
        }

        current.next = start.next;
        current = current.next;
    }

    return head;
};

