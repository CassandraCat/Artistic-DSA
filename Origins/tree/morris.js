/**
 * Morris Traversal
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 * The Morris Traversal is an algorithm that allows for the traversal of a binary tree without using any extra space.
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function morris(head) {
    if (!head) {
        return;
    }

    let current = head;
    let mostRight = null;

    while (current) {
        mostRight = current.left;
        if (mostRight) {
            while (mostRight.right && mostRight.right !== current) {
                mostRight = mostRight.right;
            }

            if (!mostRight.right) {
                mostRight.right = current;
                current = current.left;
                continue;
            } else {
                mostRight.right = null;
            }
        }
        current = current.right;
    }
}
