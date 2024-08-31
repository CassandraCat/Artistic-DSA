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

function morrisPreOrder(head) {
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
                console.log(current.value + " ");
                mostRight.right = current;
                current = current.left;
                continue;
            } else {
                mostRight.right = null;
            }
        } else {
            console.log(current.value + " ");
        }
        current = current.right;
    }
}

function morrisInOrder(head) {
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
        console.log(current.value + " ");
        current = current.right;
    }
}

function reverseNode(from) {
    let pre = null;
    let next = null;

    while (from) {
        next = from.right;
        from.right = pre;
        pre = from;
        from = next;
    }

    return pre;
}

function printList(head) {
    let tail = reverseNode(head);
    let current = tail;
    while (current) {
        console.log(current.value + " ");
        current = current.right;
    }
    reverseNode(tail);
}

function morrisPostOrder(head) {
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
                printList(current.left);
            }
        }
        current = current.right;
    }
    printList(head);
}
