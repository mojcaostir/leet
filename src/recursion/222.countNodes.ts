/** Binary Search, Bit Manipulation, Tree, Binary Tree

    Given the root of a complete binary tree, return the number of the nodes in the tree.

    According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

    Design an algorithm that runs in less than O(n) time complexity.

    Example 1:
    Input: root = [1,2,3,4,5,6]
    Output: 6

    Example 2:
    Input: root = []
    Output: 0

    Example 3:
    Input: root = [1]
    Output: 1

    Constraints:
    The number of nodes in the tree is in the range [0, 5 * 104].
    0 <= Node.val <= 5 * 104
    The tree is guaranteed to be complete.
 */

import { TreeNode } from "../models";

function countNodes(root: TreeNode | null): number {
    // Base case
    if (!root) {
        return 0;
    }

    // Get the heights of the left and right subtrees
    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);

    if (leftHeight === rightHeight) {
        // Left subtree is a full tree
        // Number of nodes in left subtree: 2^leftHeight - 1
        // Add 1 for the root and recursively count right subtree
        return (1 << leftHeight) + countNodes(root.right);
    } else {
        // Right subtree is a full tree
        // Number of nodes in right subtree: 2^rightHeight - 1
        // Add 1 for the root and recursively count left subtree
        return (1 << rightHeight) + countNodes(root.left);
    }
}

// Function to compute tree height
function getHeight(node: TreeNode | null): number {
    let height = 0;
    while (node) {
        height++;
        node = node.left; // Move down the leftmost path
    }
    return height;
};