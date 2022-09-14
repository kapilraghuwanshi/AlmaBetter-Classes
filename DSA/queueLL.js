// queue implementations using LinkedList
// FIFO

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class AlmaQueueLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // O(1)
  enqueue(item) {
    const node = new Node(item); // creates the node using class Node
    if (this.head) {
      // if the first Node exitsts
      this.tail.next = node; // inserts the created node after the tail of our Queue
      this.tail = node; // now the created node is the last node
    } else {
      // if there are no nodes in the Queue
      this.head = node; // the created node is a head
      this.tail = node; // also the created node is a tail in Queue because it is single.
    }
    this.length++; // increases the length of Queue by 1
  }
  // O(1)
  dequeue() {
    const current = this.head; // saves the link to the head which we need to remove
    this.head = this.head.next; // moves the head link to the second Node in the Queue
    this.length--; // decreaments the length of our Queue
    return current.value; // returns the removed Node's value
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    return (this.items = []);
  }
}

const myQ = new AlmaQueue();
console.log("queue size - ", myQ.size());
//add
myQ.add(1);
myQ.add("Mango");
myQ.add(true);
console.log("queue size - ", myQ.size());
console.log("queue - ", myQ.items);
//remove
console.log("queue - ", myQ.remove());
console.log("queue - ", myQ.items);

myQ.add("Orange");
console.log("queue - ", myQ.items);

const myQ1 = new AlmaQueue();
