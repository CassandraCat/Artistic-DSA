class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function lowestCommonAncestor(root, o1, o2) {
    if (root === null || root === o1 || root === o2) return root;

    const left = lowestCommonAncestor(root.left, o1, o2);
    const right = lowestCommonAncestor(root.right, o1, o2);

    if (left && right) return root;

    return left ? left : right;
}

// test
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(lowestCommonAncestor(root, root.left, root.right)); // 1
