class NodeRecord {
  constructor(node, distance) {
    this.node = node;
    this.distance = distance;
  }
}

class DijkstraHeap {
  constructor(size) {
    this.nodes = new Array(size);
    this.headIndexMap = new Map();
    this.distanceMap = new Map();
    this.size = 0;
  }

  addOrUpdateOrIgnore(node, distance) {
    if (this.inHeap(node)) {
      this.distanceMap.set(
        node,
        Math.min(this.distanceMap.get(node), distance)
      );
      this.bubbleUp(node, this.headIndexMap.get(node));
    }
    if (!this.isEntered(node)) {
      this.nodes[this.size] = node;
      this.headIndexMap.set(node, this.size);
      this.distanceMap.set(node, distance);
      this.bubbleUp(node, this.size++);
    }
  }

  pop() {
    const result = new NodeRecord(
      this.nodes[0],
      this.distanceMap.get(this.nodes[0])
    );
    const node = this.nodes[0];
    this.swap(0, --this.size);
    this.headIndexMap.set(node, -1);
    this.distanceMap.delete(node);
    node = null;
    this.bubbleDown(0, this.size);
    return result;
  }

  bubbleUp(node, index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (
        this.distanceMap.get(this.nodes[parentIndex]) <=
        this.distanceMap.get(node)
      ) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown(index, size) {
    const left = (index << 1) + 1;
    while (left < size) {
      let smallest =
        left + 1 < size &&
        this.distanceMap.get(this.nodes[left + 1]) <
          this.distanceMap.get(this.nodes[left])
          ? left + 1
          : left;
      smallest =
        this.distanceMap.get(this.nodes[smallest]) <
        this.distanceMap.get(this.nodes[index])
          ? smallest
          : index;
      if (smallest === index) {
        break;
      }
      this.swap(smallest, index);
      index = smallest;
      left = (index << 1) + 1;
    }
  }

  isEntered(node) {
    return this.headIndexMap.has(node);
  }

  inHeap(node) {
    return this.isEntered(node) && this.headIndexMap.get(node) !== -1;
  }

  swap(index1, index2) {
    this.headIndexMap.set(this.nodes[index1], index2);
    this.headIndexMap.set(this.nodes[index2], index1);
    const temp = this.nodes[index1];
    this.nodes[index1] = this.nodes[index2];
    this.nodes[index2] = temp;
  }
}

module.exports = DijkstraHeap;
