class TrieNode {
  constructor() {
    this.pass = 0;
    this.end = 0;
    this.nexts = new Array(26).fill(null);
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    if (!word) return;
    const charArr = word.split("");
    let node = this.root;
    node.pass++;
    for (let i = 0; i < charArr.length; i++) {
      const index = charArr[i].charCodeAt() - "a".charCodeAt();
      if (!node.nexts[index]) {
        node.nexts[index] = new TrieNode();
      }
      node = node.nexts[index];
      node.pass++;
    }

    node.end++;
  }

  delete(word) {
    if (!word) return;
    if (!this.search(word)) return;
    const charArr = word.split("");
    let node = this.root;
    node.pass--;
    let index = 0;
    for (let i = 0; i < charArr.length; i++) {
      index = charArr[i].charCodeAt() - "a".charCodeAt();
      if (--node.nexts[index].pass === 0) {
        node.nexts[index] = null;
        return;
      }
      node = node.nexts[index];
    }
    node.end--;
  }

  search(word) {
    if (!word) return 0;
    const charArr = word.split("");
    let node = root;
    let index = 0;
    for (let i = 0; i < charArr.length; i++) {
      index = charArr[i].charCodeAt() - "a".charCodeAt();
      if (!node.nexts[index]) return 0;
      node = node.nexts[index];
    }

    return node.end;
  }

  prefixNumber(pre) {
    if (!pre) return 0;
    const charArr = pre.split("");
    let node = root;
    let index = 0;
    for (let i = 0; i < charArr.length; i++) {
      index = charArr[i].charCodeAt() - "a".charCodeAt();
      if (!node.nexts[index]) return 0;
      node = node.nexts[index];
    }

    return node.pass;
  }
}
