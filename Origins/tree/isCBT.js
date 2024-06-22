class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isCompleteBinaryTree(root) {
  if (!root) return true;

  const queue = [root];
  let leaf = false;

  while (queue.length) {
    const node = queue.shift();

    if (node.left) {
      if (leaf) return false;
      queue.push(node.left);
    } else {
      leaf = true;
    }

    if (node.right) {
      if (leaf) return false;
      queue.push(node.right);
    } else {
      leaf = true;
    }
  }

  return true;
}

// test
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
console.log(isCompleteBinaryTree(root)); // true
