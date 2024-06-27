function sortedTopoLogy(graph) {
    const inMap = new Map();
    const zeroInQueue = [];
    for (const node of graph.nodes.values()) {
        inMap.set(node, node.in);
        if (node.in === 0) {
            zeroInQueue.push(node);
        }
    }

    const result = [];
    while (zeroInQueue.length) {
        const cur = zeroInQueue.shift();
        result.push(cur);
        for (const next of cur.nexts) {
            inMap.set(next, inMap.get(next) - 1);
            if (inMap.get(next) === 0) {
                zeroInQueue.push(next);
            }
        }
    }
}
