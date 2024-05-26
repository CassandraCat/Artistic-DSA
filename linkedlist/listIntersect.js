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

function listIntersect(head1, head2) {
  if (!head1 || !head2) {
    return null;
  }

  const loop1 = getLoopNode(head1);
  const loop2 = getLoopNode(head2);

  if (!loop1 && !loop2) {
    return noLoopListIntersect(head1, head2);
  }

  if (loop1 && loop2) {
    return loopListIntersect(head1, head2, loop1, loop2);
  }

  return null;
}

function noLoopListIntersect(head1, head2) {
  let length = 0;

  let current1 = head1;
  let current2 = head2;

  while (current1) {
    length++;
    current1 = current1.next;
  }

  while (current2) {
    length--;
    current2 = current2.next;
  }

  let longer = length > 0 ? head1 : head2;
  let shorter = length > 0 ? head2 : head1;
  length = Math.abs(length);
  while (length > 0) {
    length--;
    longer = longer.next;
  }

  while (longer !== shorter) {
    longer = longer.next;
    shorter = shorter.next;
  }

  return longer;
}

function loopListIntersect(head1, head2, loop1, loop2) {
  console.log("loop1", loop1);
  console.log("loop2", loop2);
  if (loop1 === loop2) {
    return noLoopListIntersect(
      truncateLinkedList(head1, loop1),
      truncateLinkedList(head2, loop2)
    );
  } else {
    current1 = loop1.next;
    while (current1 !== loop1) {
      if (current1 === loop2) {
        return loop1;
      }
      current1 = current1.next;
    }
  }

  return null;
}

function getLoopNode(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  if (fast === null || fast.next === null) {
    return null;
  }

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

function truncateLinkedList(head, target) {
  if (head === null || target === null) {
    return head;
  }

  let current = head;

  while (current !== null) {
    if (current === target) {
      current.next = null;
      break;
    }
    current = current.next;
  }

  return head;
}

function printLinkedList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

// Test1 - No loop Intersect
console.log("Test1 - No loop Intersect");
const list1 = new LinkedList();
list1.insert(1);
list1.insert(2);
list1.insert(3);
list1.insert(4);
list1.insert(5);

const list2 = new LinkedList();
list2.insert(6);
list2.insert(7);
list2.insert(8);
list2.insert(9);
list2.head.next.next.next.next = list1.head.next.next;

console.log("Intersect Node", listIntersect(list1.head, list2.head));
printLinkedList(list1.head);
console.log("-------------------");
printLinkedList(list2.head);
console.log("Test1 End\n");

// Test2 - Loop Intersect
// loop1 === loop2
console.log("Test2 - Loop Intersect");
const list3 = new LinkedList();
list3.insert(10);
list3.insert(11);
list3.insert(12);
list3.insert(13);
list3.insert(14);
list3.head.next.next.next.next = list3.head.next.next;

const list4 = new LinkedList();
list4.insert(15);
list4.insert(16);
list4.insert(17);
list4.insert(18);
list4.insert(19);
list4.head.next.next.next.next = list3.head.next.next;

console.log("Intersect Node", listIntersect(list3.head, list4.head));
printLinkedList(list3.head);
console.log("-------------------");
printLinkedList(list4.head);
console.log("Test2 End\n");

// Test3 - Loop Intersect
// loop1 !== loop2
console.log("Test3 - Loop Intersect");
const list5 = new LinkedList();
list5.insert(20);
list5.insert(21);
list5.insert(22);
list5.insert(23);
list5.insert(24);
list5.insert(25);
list5.insert(26);
list5.head.next.next.next.next.next.next.next = list5.head.next.next;
const list6 = new LinkedList();
list6.insert(27);
list6.insert(28);
list6.insert(29);
list6.insert(30);
list6.insert(31);
list6.head.next.next.next.next.next = list5.head.next.next.next;
console.log("Intersect Node", listIntersect(list5.head, list6.head));
console.log("Test3 End\n");

// Test4 - No Intersect
console.log("Test4 - No Intersect");
const list7 = new LinkedList();
list7.insert(30);
list7.insert(31);
list7.insert(32);
list7.insert(33);
list7.insert(34);
const list8 = new LinkedList();
list8.insert(35);
list8.insert(36);
list8.insert(37);
list8.insert(38);
list8.insert(39);
console.log("Intersect Node", listIntersect(list7.head, list8.head));
printLinkedList(list7.head);
console.log("-------------------");
printLinkedList(list8.head);
console.log("Test4 End\n");
