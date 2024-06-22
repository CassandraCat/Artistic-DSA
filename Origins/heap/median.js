const PriorityQueue = require("./PriorityQueue");

function getMedian(arr) {
  const minHeap = new PriorityQueue((a, b) => a - b);
  const maxHeap = new PriorityQueue((a, b) => b - a);

  maxHeap.enqueue(arr[0]);

  let medians = 0;

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];

    if (num <= maxHeap.peek()) {
      maxHeap.enqueue(num);
    } else {
      minHeap.enqueue(num);
    }

    if (maxHeap.size() > minHeap.size() + 1) {
      minHeap.enqueue(maxHeap.dequeue());
    } else if (minHeap.size() > maxHeap.size()) {
      maxHeap.enqueue(minHeap.dequeue());
    }
  }

  if (maxHeap.size() === minHeap.size()) {
    medians = (maxHeap.peek() + minHeap.peek()) / 2;
  } else if (maxHeap.size() > minHeap.size()) {
    medians = maxHeap.peek();
  } else {
    medians = minHeap.peek();
  }

  return medians;
}

// Test
console.log(getMedian([5, 3, 7])); // 5
