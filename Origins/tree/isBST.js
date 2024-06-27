class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class ReturnData {
    constructor(isBST, min, max) {
        this.isBST = isBST;
        this.min = min;
        this.max = max;
    }
}

function isBSTWithRecursion(root) {
    if (!root) return true; // Empty tree is a BST

    return isBSTWithRecursionHelper(
        root,
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER
    );
}

function isBSTWithRecursionHelper(node, min, max) {
    if (!node) return true;

    if (node.value < min || node.value > max) return false;

    return (
        isBSTWithRecursionHelper(node.left, min, node.value) &&
        isBSTWithRecursionHelper(node.right, node.value, max)
    );
}

function isBSTWithRecursionV2(root) {
    if (!root) return true;

    return isBSTWithRecursionV2Helper(root).isBST;
}

function isBSTWithRecursionV2Helper(node) {
    if (!node) {
        return new ReturnData(
            true,
            Number.MAX_SAFE_INTEGER,
            Number.MIN_SAFE_INTEGER
        );
    }

    const leftData = isBSTWithRecursionV2Helper(node.left);
    if (!leftData.isBST) return leftData;
    const rightData = isBSTWithRecursionV2Helper(node.right);
    if (!rightData.isBST) return rightData;

    if (node.value < leftData.max || node.value > rightData.min) {
        return new ReturnData(false, 0, 0);
    }

    return new ReturnData(
        true,
        Math.min(node.value, leftData.min),
        Math.max(node.value, rightData.max)
    );
}

// test
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);
console.log(isBSTWithRecursion(root)); // true
console.log(isBSTWithRecursionV2(root)); // true
