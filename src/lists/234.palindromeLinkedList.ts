/** Linked List, Two Pointers, Stack, Recursion

    Given the head of a singly linked list, return true if it is a palindrome or false otherwise. 

    Example 1:
    Input: head = [1,2,2,1]
    Output: true

    Example 2:
    Input: head = [1,2]
    Output: false
    
    Constraints:
    The number of nodes in the list is in the range [1, 105].
    0 <= Node.val <= 9
 */

import { ListNode } from "../models";

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true; // Single node or empty list is a palindrome.

    // Step 1: Find the middle of the linked list.
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list.
    let prev: ListNode | null = null;
    while (slow) {
        const nextTemp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextTemp;
    }

    // Step 3: Compare the two halves.
    let left: ListNode | null = head;
    let right: ListNode | null = prev; // This is now the head of the reversed second half.

    while (right) {
        if (left!.val !== right.val) {
            return false; // Mismatch found.
        }
        left = left!.next;
        right = right.next;
    }

    return true; // All nodes matched.
}