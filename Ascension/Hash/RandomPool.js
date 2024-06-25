class RandomPool {
  constructor() {
    this.keyIndexMap = new Map();
    this.indexKeyMap = new Map();
    this.size = 0;
  }

  insert(key) {
    if (!this.keyIndexMap.has(key)) {
      this.keyIndexMap.set(key, this.size);
      this.indexKeyMap.set(this.size++, key);
    }
  }

  getRandom() {
    if (this.size === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * this.size);
    return this.indexKeyMap.get(randomIndex);
  }

  delete(key) {
    let deleteIndex = this.keyIndexMap.get(key);
    let lastIndex = --this.size;
    let lastKey = this.indexKeyMap.get(lastIndex);
    this.keyIndexMap.set(lastKey, deleteIndex);
    this.indexKeyMap.set(deleteIndex, lastKey);
    this.keyIndexMap.delete(key);
    this.indexKeyMap.delete(lastIndex);
  }
}

// Test
const pool = new RandomPool();
pool.insert("A");
pool.insert("B");
pool.insert("C");
console.log(pool.getRandom()); // A, B or C
pool.delete("A");
console.log(pool.getRandom()); // B or C
