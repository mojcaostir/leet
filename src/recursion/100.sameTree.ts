/** Tree, Depth-First Search, Breadth-First Search, Binary Tree
    
    Given the roots of two binary trees p and q, write a function to check if they are the same or not.

    Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

    Example 1:
    Input: p = [1,2,3], q = [1,2,3]
    Output: true

    Example 2:
    Input: p = [1,2], q = [1,null,2]
    Output: false

    Example 3:
    Input: p = [1,2,1], q = [1,1,2]
    Output: false
    
    Constraints:
    The number of nodes in both trees is in the range [0, 100].
    -104 <= Node.val <= 104
 */

import { TreeNode } from "../models";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // Base cases
    if (p === null && q === null) {
        return true; // Both nodes are null
    }
    if (p === null || q === null || p.val !== q.val) {
        return false; // One is null or values differ
    }

    // Recursive checks for left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};