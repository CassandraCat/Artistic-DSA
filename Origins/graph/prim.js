function prim(graph) {
  const set = new Set();
  const result = new Set();
  const edges = [];

  for (const node of graph.nodes.values()) {
    if (!set.has(node)) {
      set.add(node);
      edges = Array.from(node.edges).sort((a, b) => a.weight - b.weight);
      while (edges.length) {
        const edge = edges.shift();
        const toNode = edge.to;
        if (!set.has(toNode)) {
          set.add(toNode);
          result.add(edge);
          edges.push(...toNode.edges);
          edges.sort((a, b) => a.weight - b.weight);
        }
      }
    }
  }

  return result;
}
