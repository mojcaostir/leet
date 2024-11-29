/** Tree, Depth-First Search, Breadth-First Search, Binary Tree

    Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

    Example 1:
    Input: root = [1,2,2,3,4,4,3]
    Output: true

    Example 2:
    Input: root = [1,2,2,null,3,null,3]
    Output: false
    
    Constraints:
    The number of nodes in the tree is in the range [1, 1000].
    -100 <= Node.val <= 100
 */

import { TreeNode } from "../models";

function isSymmetric(root: TreeNode | null): boolean {
    // Base case
    if (!root) {
        return true; 
    }
    return isMirror(root.left, root.right);
};

function isMirror(t1: TreeNode | null, t2: TreeNode | null): boolean {
    // Base cases
    if (!t1 && !t2) {
        return true;  // Both are null
    }
    if (!t1 || !t2) {
        return false; // One is null, the other is not
    }
    
    return (
        t1.val === t2.val && // Values are equal
        isMirror(t1.left, t2.right) && // Left subtree of t1 mirrors right subtree of t2
        isMirror(t1.right, t2.left) // Right subtree of t1 mirrors left subtree of t2
    );
};