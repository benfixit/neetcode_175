# Q:206 - https://leetcode.com/problems/reverse-linked-list/

from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:        
        prev, current = None, head
        
        while current != None:
            next = current.next
            current.next = prev
            prev = current
            current = next
        
        return prev

    def reverseListRecursive(self, head: Optional[ListNode]) -> Optional[ListNode]:
        pass
            
c = Solution()

# head = [1,2,3,4,5]

head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))

reversed = c.reverseList(head)

while reversed:
    print(reversed.val)
    reversed = reversed.next

