class SkipListNode {
    constructor(value) {
        this.value = value;
        this.next = [];
    }
}

class SkipList {
    constructor() {
        this.head = new SkipListNode();
        this.head.next.push(null);
        this.maxLevel = 0;
        this.size = 0;
        this.PROBABILITY = 0.5;
    }

    findInsertionOfTopLevel(newValue, level) {
        let currentMaxLevel = this.maxLevel;
        let cur = this.head;
        while (currentMaxLevel >= level) {
            while (
                cur.next[currentMaxLevel] !== null &&
                cur.next[currentMaxLevel].value < newValue
            ) {
                cur = cur.next[currentMaxLevel];
            }
            currentMaxLevel--;
        }
        return cur;
    }

    findNextInsertion(cur, newValue, level) {
        while (cur.next[level] !== null && cur.next[level].value < newValue) {
            cur = cur.next[level];
        }
        return cur;
    }

    contains(value) {
        if (this.size === 0) {
            return false;
        }
        let cur = this.head;
        let curLevel = this.maxLevel;
        while (curLevel >= 0) {
            if (cur.next[curLevel] !== null) {
                if (cur.next[curLevel].value === value) {
                    return true;
                } else if (cur.next[curLevel].value < value) {
                    cur = cur.next[curLevel];
                } else {
                    curLevel--;
                }
            } else {
                curLevel--;
            }
        }
        return false;
    }

    insert(newValue) {
        if (!this.contains(newValue)) {
            let level = 1;
            while (Math.random() < this.PROBABILITY) {
                level++;
            }

            if (level > this.maxLevel) {
                while (this.maxLevel < level) {
                    this.head.next.push(null);
                    this.maxLevel++;
                }
            }

            const newNode = new SkipListNode(newValue);
            let cur = this.findInsertionOfTopLevel(newValue, level);
            while (level > 0) {
                level--;
                newNode.next[level] = cur.next[level];
                cur.next[level] = newNode;
                cur = this.findNextInsertion(cur, newValue, level);
            }
            this.size++;
        }
    }
}

// Test Cases
const skipList = new SkipList();
skipList.insert(1);
skipList.insert(2);
skipList.insert(3);
skipList.insert(4);
skipList.insert(5);
console.log(skipList);
