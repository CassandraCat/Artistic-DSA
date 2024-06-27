class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class ReturnData {
    constructor(isFull, height) {
        this.isFull = isFull;
        this.height = height;
    }
}

function isFullBinaryTree(root) {
    if (!root) return true;

    const queue = [root];

    while (queue.length) {
        const node = queue.shift();

        if ((node.left && !node.right) || (!node.left && node.right)) {
            return false;
        }

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return true;
}

function isFullBinaryTreeV2(root) {
    if (!root) return true;

    return isFullBinaryTreeHelper(root).isFull;
}

function isFullBinaryTreeHelper(node) {
    if (!node) return new ReturnData(true, 0);

    const leftData = isFullBinaryTreeHelper(node.left);
    if (!leftData.isFull) return leftData;
    const rightData = isFullBinaryTreeHelper(node.right);
    if (!rightData.isFull) return rightData;

    if (leftData.height !== rightData.height) {
        return new ReturnData(false, 0);
    }

    return new ReturnData(true, leftData.height + 1);
}

// test
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(isFullBinaryTree(root)); // true
console.log(isFullBinaryTreeV2(root)); // true
