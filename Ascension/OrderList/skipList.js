class SkipListNode {
    constructor(value) {
        this.value = value;
        this.nextNodes = [];
    }

    isValueLess(otherValue) {
        return (
            otherValue !== null &&
            (this.value === null || this.value < otherValue)
        );
    }

    isValueEqual(otherValue) {
        return (
            (this.value === null && otherValue === null) ||
            (this.value !== null &&
                otherValue !== null &&
                this.value === otherValue)
        );
    }
}

class SkipList {
    constructor() {
        this.PROBABILITY = 0.5;
        this.head = new SkipListNode(null);
        this.head.nextNodes.push(null);
        this.size = 0;
        this.maxLevel = 0;
    }

    mostRightLessNodeInTree(value) {
        let level = this.maxLevel;
        let cur = this.head;
        while (level >= 0) {
            cur = this.mostRightLessNodeInLevel(value, cur, level--);
        }
        return cur;
    }

    mostRightLessNodeInLevel(value, cur, level) {
        let next = cur.nextNodes[level];
        while (next !== null && next.isValueLess(value)) {
            cur = next;
            next = cur.nextNodes[level];
        }
        return cur;
    }

    contains(value) {
        if (value === null) return false;
        let less = this.mostRightLessNodeInTree(value);
        let next = less.nextNodes[0];
        return next !== null && next.isValueEqual(value);
    }

    add(value) {
        if (value === null) return;

        let less = this.mostRightLessNodeInTree(value);
        let find = less.nextNodes[0];

        if (find !== null && find.isValueEqual(value)) {
            find.value = value;
        } else {
            this.size++;
            let newNodeLevel = 0;
            while (Math.random() < this.PROBABILITY) {
                newNodeLevel++;
            }

            while (newNodeLevel > this.maxLevel) {
                this.head.nextNodes.push(null);
                this.maxLevel++;
            }

            const newNode = new SkipListNode(value);
            for (let i = 0; i <= newNodeLevel; i++) {
                newNode.nextNodes.push(null);
            }

            let level = this.maxLevel;
            let pre = this.head;
            while (level >= 0) {
                pre = this.mostRightLessNodeInLevel(value, pre, level);
                if (level <= newNodeLevel) {
                    newNode.nextNodes[level] = pre.nextNodes[level];
                    pre.nextNodes[level] = newNode;
                }
                level--;
            }
        }
    }

    get(value) {
        if (value === null) return null;
        let less = this.mostRightLessNodeInTree(value);
        let next = less.nextNodes[0];
        return next !== null && next.isValueEqual(value) ? next.value : null;
    }

    remove(value) {
        if (this.contains(value)) {
            this.size--;
            let level = this.maxLevel;
            let pre = this.head;
            while (level >= 0) {
                pre = this.mostRightLessNodeInLevel(value, pre, level);
                let next = pre.nextNodes[level];
                if (next !== null && next.isValueEqual(value)) {
                    pre.nextNodes[level] = next.nextNodes[level];
                }
                if (
                    level !== 0 &&
                    pre === this.head &&
                    pre.nextNodes[level] === null
                ) {
                    this.head.nextNodes.pop();
                    this.maxLevel--;
                }
                level--;
            }
        }
    }

    firstValue() {
        return this.head.nextNodes[0] !== null
            ? this.head.nextNodes[0].value
            : null;
    }

    lastValue() {
        let level = this.maxLevel;
        let cur = this.head;
        while (level >= 0) {
            let next = cur.nextNodes[level];
            while (next !== null) {
                cur = next;
                next = cur.nextNodes[level];
            }
            level--;
        }
        return cur.value;
    }

    ceilingValue(value) {
        if (value === null) return null;
        let less = this.mostRightLessNodeInTree(value);
        let next = less.nextNodes[0];
        return next !== null ? next.value : null;
    }

    floorValue(value) {
        if (value === null) return null;
        let less = this.mostRightLessNodeInTree(value);
        let next = less.nextNodes[0];
        return next !== null && next.isValueEqual(value) ? value : less.value;
    }

    getSize() {
        return this.size;
    }
}

function printAll(obj) {
    for (let i = obj.maxLevel; i >= 0; i--) {
        let levelOutput = `Level ${i} : `;
        let cur = obj.head;
        while (cur.nextNodes[i] !== null) {
            let next = cur.nextNodes[i];
            levelOutput += `(${next.value}) `;
            cur = next;
        }
        console.log(levelOutput);
    }
}

// Test Case
let skipList = new SkipList();
skipList.add(3);
skipList.add(2);
skipList.add(1);
skipList.add(4);
skipList.add(5);
printAll(skipList);
console.log(skipList.contains(3)); // true
