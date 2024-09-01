class Element {
    constructor(value) {
        this.value = value;
    }
}

class UnionFindSet {
    constructor(list) {
        this.elementMap = new Map();
        this.fatherMap = new Map();
        this.sizeMap = new Map();
        for (let value of list) {
            let element = new Element(value);
            this.elementMap.set(value, element);
            this.fatherMap.set(element, element);
            this.sizeMap.set(element, 1);
        }
    }

    isSameSet(setA, setB) {
        if (this.elementMap.has(setA) && this.elementMap.has(setB)) {
            return (
                this.findHead(this.elementMap.get(setA)) ===
                this.findHead(this.elementMap.get(setB))
            );
        }
        return false;
    }

    findHead(element) {
        let path = [];
        while (element !== this.fatherMap.get(element)) {
            path.push(element);
            element = this.fatherMap.get(element);
        }
        for (let node of path) {
            this.fatherMap.set(node, element);
        }
        return element;
    }

    unionSet(setA, setB) {
        if (this.elementMap.has(setA) && this.elementMap.has(setB)) {
            let headA = this.findHead(this.elementMap.get(setA));
            let headB = this.findHead(this.elementMap.get(setB));
            if (headA !== headB) {
                let sizeA = this.sizeMap.get(headA);
                let sizeB = this.sizeMap.get(headB);
                let big = sizeA >= sizeB ? headA : headB;
                let small = big === headA ? headB : headA;
                this.fatherMap.set(small, big);
                this.sizeMap.set(big, sizeA + sizeB);
                this.sizeMap.delete(small);
            }
        }
    }
}
