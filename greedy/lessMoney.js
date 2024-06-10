const MinHeap = require("../heap/MinHeap");

function lessMoney(arr) {
  const minHeap = new MinHeap();
  for (const item of arr) {
    minHeap.insert(item);
  }

  let sum = 0;
  let current = 0;

  while (minHeap.size() > 1) {
    current = minHeap.extractMin() + minHeap.extractMin();
    sum += current;
    minHeap.insert(current);
  }

  return sum;
}
