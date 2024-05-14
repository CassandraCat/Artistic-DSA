class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.shift();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (
      this.heap[parentIndex] !== undefined &&
      this.heap[currentIndex] < this.heap[parentIndex]
    ) {
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    let leftChildIndex = 2 * currentIndex + 1;
    let rightChildIndex = 2 * currentIndex + 2;
    let nextIndex =
      this.heap[rightChildIndex] &&
      this.heap[rightChildIndex] < this.heap[leftChildIndex]
        ? rightChildIndex
        : leftChildIndex;

    while (
      this.heap[nextIndex] !== undefined &&
      this.heap[currentIndex] > this.heap[nextIndex]
    ) {
      [this.heap[currentIndex], this.heap[nextIndex]] = [
        this.heap[nextIndex],
        this.heap[currentIndex],
      ];
      currentIndex = nextIndex;
      leftChildIndex = 2 * currentIndex + 1;
      rightChildIndex = 2 * currentIndex + 2;
      nextIndex =
        this.heap[rightChildIndex] &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;
    }
  }

  heapSort() {
    const sortedArray = [];
    let min = this.extractMin();
    while (min) {
      sortedArray.push(min);
      min = this.extractMin();
    }
    return sortedArray;
  }
}

// Example usage:
const heap = new MinHeap();
heap.insert(5);
heap.insert(2);
heap.insert(9);
heap.insert(1);
heap.insert(7);
heap.insert(6);
heap.insert(3);
console.log(heap.heapSort()); // [1, 2, 3, 5, 6, 7, 9]
