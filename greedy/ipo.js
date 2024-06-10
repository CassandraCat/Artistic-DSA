const PriorityQueue = require("../heap/PriorityQueue");

class Node {
  constructor(profit, capital) {
    this.profit = profit;
    this.capital = capital;
  }
}

function findMaximizedCapital(k, W, profits, capital) {
  const minCostQ = new PriorityQueue((a, b) => a.capital - b.capital);
  const maxProfitQ = new PriorityQueue((a, b) => b.profit - a.profit);

  for (let i = 0; i < profits.length; i++) {
    minCostQ.enqueue(new Node(profits[i], capital[i]));
  }

  for (let i = 0; i < k; i++) {
    while (!minCostQ.isEmpty() && minCostQ.peek().capital <= W) {
      maxProfitQ.enqueue(minCostQ.dequeue());
    }

    if (maxProfitQ.isEmpty()) {
      break;
    }

    W += maxProfitQ.dequeue().profit;
  }

  return W;
}

// Test
const profits = [1, 2, 3];
const capital = [0, 1, 1];
const k = 2;
const W = 0;
console.log(findMaximizedCapital(k, W, profits, capital)); // 4
