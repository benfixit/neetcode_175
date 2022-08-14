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
        def reverse(current, prev):
            if not current:
                return prev
            
            next = current.next
            current.next = prev
            return reverse(next, current)
        
        return reverse(head, None)

    def reverseListRecursive2(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None
        
        newHead = head
        if head.next:
            newHead = self.reverseList(head.next)
            head.next.next = head
        head.next = None

        return newHead
            
c = Solution()

# head = [1,2,3,4,5]

# head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))

# reversed = c.reverseList(head)

head1 = ListNode(1)
head2 = ListNode(1, ListNode(2))
head3 = ListNode(1, ListNode(2, ListNode(3)))
head4 = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))


reversed = c.reverseListRecursive(head2)
# reversed = c.reverseListRecursive(head2)
# reversed = c.reverseListRecursive(head3)
# reversed = c.reverseListRecursive(head4)


while reversed:
    print(reversed.val)
    reversed = reversed.next

