class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function getSuccessorNode(node) {
    if (!node) return null;
    if (node.right) {
        return getLeftMostChild(node.right);
    } else {
        return getRightMostParent(node);
    }
}

function getLeftMostChild(node) {
    while (node.left) {
        node = node.left;
    }
    return node;
}

function getRightMostParent(node) {
    let parent = node.parent;
    while (parent && parent.right === node) {
        node = parent;
        parent = parent.parent;
    }
    return parent;
}

// test
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.left.parent = root;
root.right.parent = root;
root.left.left.parent = root.left;
root.left.right.parent = root.left;
root.right.left.parent = root.right;
root.right.right.parent = root.right;
console.log(getSuccessorNode(root.left)); // 5
