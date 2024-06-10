const MinHeap = require("../heap/MinHeap");

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
