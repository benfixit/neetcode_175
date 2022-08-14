# Q:21 - https://leetcode.com/problems/merge-two-sorted-lists/

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

from typing import Optional

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:

        dummy = ListNode(-1)
        head = dummy

        l1 = list1
        l2 = list2

        while l1 != None and l2 != None:
            if l1.val <= l2.val:
                dummy.next = l1
                l1 = l1.next
            else:
                dummy.next = l2
                l2 = l2.next
            dummy = dummy.next
            
        
        if l1 != None:
            dummy.next = l1
        elif l2 != None:
            dummy.next = l2

        return head.next

c = Solution()

# head = [1,2,3,4,5]

list1 = ListNode(1, ListNode(2, ListNode(4)))
list2 = ListNode(1, ListNode(3, ListNode(4)))


merged = c.mergeTwoLists(list1, list2)

while merged:
    print("val === ",merged.val)
    merged = merged.next
