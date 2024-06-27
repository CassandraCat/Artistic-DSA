class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.random = null;
    }
}

function cloneRandomList(head) {
    if (!head) {
        return null;
    }

    let current = head;
    while (current) {
        const clone = new Node(current.value);
        clone.next = current.next;
        current.next = clone;
        current = clone.next;
    }

    current = head;
    while (current) {
        if (current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }

    const dummy = new Node(0);
    let copy = dummy;
    current = head;
    while (current) {
        copy.next = current.next;
        copy = copy.next;
        current.next = current.next.next;
        current = current.next;
    }

    return dummy.next;
}

function printRandomLinkedList(head) {
    let current = head;
    while (current) {
        console.log(
            `Node: ${current.value}, Random: ${
                current.random ? current.random.value : null
            }`
        );
        current = current.next;
    }
}

// test
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
node1.next = node2;
node2.next = node3;
node1.random = node3;
node2.random = node1;
node3.random = node2;
let head = cloneRandomList(node1);
printRandomLinkedList(head);
