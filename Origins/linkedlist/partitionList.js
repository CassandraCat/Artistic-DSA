class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = node;
    }
}

function partitionList(head, partition) {
    if (!head) {
        return null;
    }

    let current = head;

    let lessHead = null;
    let lessTail = null;

    let equalHead = null;
    let equalTail = null;

    let moreHead = null;
    let moreTail = null;

    while (current !== null) {
        if (current.value < partition) {
            if (!lessHead) {
                lessHead = current;
                lessTail = current;
            } else {
                lessTail.next = current;
                lessTail = current;
            }
        } else if (current.value === partition) {
            if (!equalHead) {
                equalHead = current;
                equalTail = current;
            } else {
                equalTail.next = current;
                equalTail = current;
            }
        } else {
            if (!moreHead) {
                moreHead = current;
                moreTail = current;
            } else {
                moreTail.next = current;
                moreTail = current;
            }
        }
        current = current.next;
    }

    if (lessTail) {
        lessTail.next = equalHead ? equalHead : moreHead;
    }

    if (equalTail) {
        equalTail.next = moreHead;
    }

    if (moreTail) {
        moreTail.next = null;
    }

    return lessHead ? lessHead : equalHead ? equalHead : moreHead;
}

function printLinkedList(head) {
    let current = head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

// test
let list = new LinkedList();
list.insert(3);
list.insert(5);
list.insert(8);
list.insert(5);
list.insert(10);
list.insert(2);
list.insert(1);
let partitioned = partitionList(list.head, 5);
printLinkedList(partitioned);
