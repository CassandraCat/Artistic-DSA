class GraphNode {
    constructor(value) {
        this.value = value;
        this.in = 0;
        this.out = 0;
        this.nexts = [];
        this.edges = [];
    }
}

class Edge {
    constructor(weight, from, to) {
        this.weight = weight;
        this.from = from;
        this.to = to;
    }
}

class Graph {
    constructor() {
        this.nodes = new Map();
        this.edges = new Set();
    }
}

function createGraph(matrix) {
    const graph = new Graph();
    for (let i = 0; i < matrix.length; i++) {
        const from = matrix[i][0];
        const to = matrix[i][1];
        const weight = matrix[i][2];
        if (!graph.nodes.has(from)) {
            graph.nodes.set(from, new GraphNode(from));
        }
        if (!graph.nodes.has(to)) {
            graph.nodes.set(to, new GraphNode(to));
        }
        const fromNode = graph.nodes.get(from);
        const toNode = graph.nodes.get(to);
        const newEdge = new Edge(weight, fromNode, toNode);
        fromNode.nexts.push(toNode);
        fromNode.out++;
        toNode.in++;
        fromNode.edges.push(newEdge);
        graph.edges.add(newEdge);
    }
}

module.exports = {
    createGraph,
};
