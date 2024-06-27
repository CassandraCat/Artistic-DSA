const DijkstraHeap = require("../heap/DijkstraHeap");

function dijkstra(node) {
    const distanceMap = new Map();
    const touchedNodes = new Set();
    distanceMap.set(node, 0);
    let minNode = getMinDistanceAndUnSelectedNode(distanceMap, touchedNodes);
    while (minNode) {
        const distance = distanceMap.get(minNode);
        for (const edge of minNode.edges) {
            const toNode = edge.to;
            distanceMap.put(
                toNode,
                Math.min(distanceMap.get(toNode), distance + edge.weight)
            );
        }
        touchedNodes.add(minNode);
        minNode = getMinDistanceAndUnSelectedNode(distanceMap, touchedNodes);
    }

    return distanceMap;
}

function getMinDistanceAndUnSelectedNode(distanceMap, touchedNodes) {
    let minDistance = Infinity;
    let minNode = null;
    for (const [node, distance] of distanceMap) {
        if (!touchedNodes.has(node) && distance < minDistance) {
            minDistance = distance;
            minNode = node;
        }
    }
    return minNode;
}

function dijkstraWithHeap(node, size) {
    const heap = new DijkstraHeap(size);
    heap.bubbleUp(node, 0);
    const result = new Map();

    while (heap.size > 0) {
        const record = heap.pop();
        const distance = record.distance;
        const current = record.node;
        for (const edge of current.edges) {
            heap.addOrUpdateOrIgnore(edge.to, distance + edge.weight);
        }
        result.set(current, distance);
    }

    return result;
}
