// Q:143 - https://leetcode.com/problems/reorder-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let slow = head,
    fast = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //reverse slow
  let second = slow.next,
    previous = (slow.next = null);

  while (second !== null) {
    const next = second.next;
    second.next = previous;
    previous = second;
    second = next;
  }

  let first = head;
  second = previous;

  //merge first and previous
  while (second) {
    let tmp1 = first.next;
    let tmp2 = second.next;

    first.next = second;
    second.next = tmp1;

    first = tmp1;
    second = tmp2;
  }
};
