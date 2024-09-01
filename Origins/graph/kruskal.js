const UnionFind = require("./UnionFind");

function kruskal(graph) {
    const unionFind = new UnionFind(graph.nodes.values());
    const edges = Array.from(graph.edges).sort((a, b) => a.weight - b.weight);
    const result = [];
    for (const edge of edges) {
        if (!unionFind.isSameSet(edge.from, edge.to)) {
            result.push(edge);
            unionFind.union(edge.from, edge.to);
        }
    }
    return result;
}

module.exports = kruskal;
