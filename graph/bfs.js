function bfs(node) {
  if (node === null) return;
  const queue = [];
  const set = new Set();
  queue.push(node);
  set.add(node);
  while (queue.length) {
    const cur = queue.shift();
    console.log(cur.value);
    for (let next of cur.nexts) {
      if (!set.has(next)) {
        queue.push(next);
        set.add(next);
      }
    }
  }
}
