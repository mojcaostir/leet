/** Tree, Depth-First Search, Breadth-First Search, Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
 
Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
 */

import { TreeNode } from "../models";

function maxDepth(root: TreeNode | null): number {
    // Base case: empty tree has a depth of 0
    if (root === null) {
        return 0;
    }

    // Recursive calls to find the depth of left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // The depth of the current tree is the greater of the two depths plus 1 (for the root)
    return Math.max(leftDepth, rightDepth) + 1;
};