class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function processMinHeightWithRecursion(head) {
    if (head.left === null && head.right === null) {
        return 1;
    }

    let leftHeight = Number.MAX_VALUE;
    if (head.left) {
        leftHeight = processMinHeightWithRecursion(head.left);
    }
    let rightHeight = Number.MAX_VALUE;
    if (head.right) {
        rightHeight = processMinHeightWithRecursion(head.right);
    }
    return 1 + Math.min(leftHeight, rightHeight);
}

function processMinHeightWithMorris(head) {
    if (!head) {
        return 0;
    }

    let current = head;
    let mostRight = null;
    let currentLevel = null;
    let minHeight = Number.MAX_VALUE;

    while (current) {
        mostRight = current.left;
        if (mostRight) {
            let rightBoundaryHeight = 1;
            while (mostRight.right != null && mostRight.right != cur) {
                rightBoardSize++;
                mostRight = mostRight.right;
            }
            if (mostRight.right == null) {
                currentLevel++;
                mostRight.right = cur;
                cur = cur.left;
                continue;
            } else {
                if (mostRight.left == null) {
                    minHeight = Math.min(minHeight, currentLevel);
                }
                currentLevel -= rightBoundaryHeight;
                mostRight.right = null;
            }
        } else {
            currentLevel++;
        }
        current = current.right;
    }

    let finalRightBoundaryHeight = 1;
    current = head;
    while (current.right != null) {
        finalRightBoundaryHeight++;
        current = current.right;
    }

    if (current.left == null && current.right == null) {
        minHeight = Math.min(minHeight, finalRightBoundaryHeight);
    }

    return minHeight;
}

function minHeight(head) {
    if (!head) {
        return 0;
    }

    return processMinHeightWithRecursion(head);
}
