/** Linked List, Recursion

    Given the head of a singly linked list, reverse the list, and return the reversed list.

    Example 1:
    Input: head = [1,2,3,4,5]
    Output: [5,4,3,2,1]

    Example 2:
    Input: head = [1,2]
    Output: [2,1]

    Example 3:
    Input: head = []
    Output: []

    Constraints:
    The number of nodes in the list is the range [0, 5000].
    -5000 <= Node.val <= 5000
 */

import { ListNode } from "../models";

function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (current !== null) {
        const next: ListNode | null = current.next; // Store the next node
        current.next = prev; // Reverse the link
        prev = current; // Move prev forward
        current = next; // Move current forward
    }

    return prev; // New head
}
