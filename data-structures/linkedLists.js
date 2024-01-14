class LLNode {
  node;

  constructor(value) {
    this.node = {
      value,
      next: null
    };
  }

  getValue() {
    return this.node.value;
  }

  setValue(value) {
    this.node.value = value;
  }

  hasNext() {
    return this.node.next !== null;
  }

  getNext() {
    return this.node.next;
  }

  setNext(node) {
    this.node.next = node;
  }
}

class LinkedList {
  head;
  size;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(value) {
    const node = new LLNode(value);
    if (this.head !== null) {
      node.setNext(this.head);
    }

    this.head = node;
    this.size++;
  }

  pop() {
    if (this.head !== null) {
      if (this.head.hasNext()) {
        this.head = this.head.getNext();
      } else {
        this.head = null;
      }
      this.size--;
    }
  }

  toString() {
    let curr = this.head;
    while (curr !== null) {
      console.log(curr.getValue());
      curr = curr.getNext();
    }
  }
}

// Tests

const ll = new LinkedList();
ll.push(1);
ll.push(2);
ll.push(8);
ll.pop();

ll.toString();