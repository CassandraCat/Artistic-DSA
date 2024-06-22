class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class ReturnData {
  constructor(isBalanced, height) {
    this.isBalanced = isBalanced;
    this.height = height;
  }
}

function isBalancedTree(root) {
  if (!root) return true;

  return isBalancedTreeHelper(root).isBalanced;
}

function isBalancedTreeHelper(root) {
  if (!root) return new ReturnData(true, 0);

  const leftData = isBalancedTreeHelper(root.left);
  if (!leftData.isBalanced) return leftData;
  const rightData = isBalancedTreeHelper(root.right);
  if (!rightData.isBalanced) return rightData;

  if (Math.abs(leftData.height - rightData.height) > 1) {
    return new ReturnData(false, 0);
  }

  return new ReturnData(true, Math.max(leftData.height, rightData.height) + 1);
}

// test
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(isBalancedTree(root)); // true
