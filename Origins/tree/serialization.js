class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function stringify(root) {
  if (!root) return "#_";

  let res = root.value + "_";
  res += stringify(root.left);
  res += stringify(root.right);
  return res;
}

function parse(data) {
  const nodes = data.split("_");
  return buildTree(nodes);
}

function buildTree(nodes) {
  const node = nodes.shift();
  if (node === "#") return null;

  const root = new TreeNode(parseInt(node));
  root.left = buildTree(nodes);
  root.right = buildTree(nodes);
  return root;
}
