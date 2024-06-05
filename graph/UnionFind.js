class UnionFind {
  constructor(nodes) {
    this.setMap = new Map();
    for (const node of nodes) {
      const set = new Set();
      set.add(node);
      this.setMap.set(node, set);
    }
  }

  isSameSet(from, to) {
    const fromSet = this.setMap.get(from);
    const toSet = this.setMap.get(to);
    return fromSet === toSet;
  }

  union(from, to) {
    const fromSet = this.setMap.get(from);
    const toSet = this.setMap.get(to);
    if (fromSet === toSet) return;
    for (const node of toSet) {
      fromSet.add(node);
      this.setMap.set(node, fromSet);
    }
  }
}

module.exports = UnionFind;
