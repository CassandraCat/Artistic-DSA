class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function preOrderTraverseWithRecursion(node) {
    if (!node) {
        return;
    }

    console.log(node.value);
    preOrderTraverseWithRecursion(node.left);
    preOrderTraverseWithRecursion(node.right);
}

function inOrderTraverseWithRecursion(node) {
    if (!node) {
        return;
    }

    inOrderTraverseWithRecursion(node.left);
    console.log(node.value);
    inOrderTraverseWithRecursion(node.right);
}

function postOrderTraverseWithRecursion(node) {
    if (!node) {
        return;
    }

    postOrderTraverseWithRecursion(node.left);
    postOrderTraverseWithRecursion(node.right);
    console.log(node.value);
}

function preOrderTraverseWithIteration(node) {
    const stack = [];

    stack.push(node);

    while (stack.length > 0) {
        const current = stack.pop();

        console.log(current.value);

        if (current.right) {
            stack.push(current.right);
        }

        if (current.left) {
            stack.push(current.left);
        }
    }
}

function inOrderTraverseWithIteration(node) {
    const stack = [];

    let current = node;

    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();

        console.log(current.value);

        current = current.right;
    }
}

function postOrderTraverseWithIteration(node) {
    const stack1 = [];
    const stack2 = [];

    stack1.push(node);

    while (stack1.length > 0) {
        const current = stack1.pop();

        stack2.push(current);

        if (current.left) {
            stack1.push(current.left);
        }

        if (current.right) {
            stack1.push(current.right);
        }
    }

    while (stack2.length > 0) {
        console.log(stack2.pop().value);
    }
}

function sequenceTraverse(node) {
    const queue = [];

    queue.push(node);

    while (queue.length > 0) {
        const current = queue.shift();

        console.log(current.value);

        if (current.left) {
            queue.push(current.left);
        }

        if (current.right) {
            queue.push(current.right);
        }
    }
}

function getTreeMaxWidthWithMap(root) {
    if (!root) {
        return 0;
    }

    const queue = [];
    const map = new Map();

    queue.push(root);
    map.set(root, 1);

    let currentLevel = 1;
    let currentLevelNodes = 0;
    let maxWidth = 0;

    while (queue.length > 0) {
        const current = queue.shift();
        const currentLevelOfCurrent = map.get(current);

        if (currentLevelOfCurrent === currentLevel) {
            currentLevelNodes++;
        } else {
            maxWidth = Math.max(maxWidth, currentLevelNodes);
            currentLevel++;
            currentLevelNodes = 1;
        }

        if (current.left) {
            map.set(current.left, currentLevelOfCurrent + 1);
            queue.push(current.left);
        }

        if (current.right) {
            map.set(current.right, currentLevelOfCurrent + 1);
            queue.push(current.right);
        }
    }

    maxWidth = Math.max(maxWidth, currentLevelNodes);
    return maxWidth;
}

function getTreeMaxWidthNoMap(root) {
    if (!root) {
        return 0;
    }

    const queue = [];
    queue.push(root);

    let currentEnd = root;
    let nextEnd = null;
    let currentLevelNodes = 0;
    let maxWidth = 0;

    while (queue.length > 0) {
        const current = queue.shift();

        if (current.left) {
            queue.push(current.left);
            nextEnd = current.left;
        }

        if (current.right) {
            queue.push(current.right);
            nextEnd = current.right;
        }

        currentLevelNodes++;

        if (currentEnd === current) {
            maxWidth = Math.max(maxWidth, currentLevelNodes);
            currentLevelNodes = 0;
            currentEnd = nextEnd;
        }
    }

    return maxWidth;
}

// test
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("Pre-order Traversal with Recursion");
preOrderTraverseWithRecursion(root);
console.log("In-order Traversal with Recursion");
inOrderTraverseWithRecursion(root);
console.log("Post-order Traversal with Recursion");
postOrderTraverseWithRecursion(root);

console.log("Pre-order Traversal with Iteration");
preOrderTraverseWithIteration(root);
console.log("In-order Traversal with Iteration");
inOrderTraverseWithIteration(root);
console.log("Post-order Traversal with Iteration");
postOrderTraverseWithIteration(root);

console.log("Sequence Traversal");
sequenceTraverse(root);

console.log("Max Width of Tree");
console.log(getTreeMaxWidthWithMap(root));
console.log(getTreeMaxWidthNoMap(root));
