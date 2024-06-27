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

    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    length() {
        let current = this.head;
        let count = 0;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }
}

function isPalindromeUseStack(list) {
    let head = list.head;
    if (!head || !head.next) {
        return true;
    }

    const stack = [];
    let slow = head;
    while (head !== null) {
        stack.push(head.value);
        head = head.next;
    }

    while (slow !== null) {
        if (slow.value !== stack.pop()) {
            return false;
        }
        slow = slow.next;
    }

    return true;
}

function isPalindrome(list) {
    let head = list.head;
    if (!head || !head.next) {
        return true;
    }

    const pivot = list.length() >> 1;

    let current = head;
    for (let i = 1; i < pivot; i++) {
        current = current.next;
    }

    let next = current.next;
    let temp = null;
    current.next = null;
    while (next !== null) {
        temp = next.next;
        next.next = current;
        current = next;
        next = temp;
    }

    let left = head;
    let right = current;
    while (left !== null && right !== null) {
        if (left.value !== right.value) {
            return false;
        }
        left = left.next;
        right = right.next;
    }

    return true;
}

// test
const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(2);
list.insert(1);
console.log(isPalindromeUseStack(list)); // true
console.log(isPalindrome(list)); // true
