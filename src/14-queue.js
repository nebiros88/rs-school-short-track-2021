const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.firstNode = null;
    this.lastNode = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    if (this.length === 0) {
      this.lastNode = new ListNode(element);
      this.firstNode = this.lastNode;
    } else {
      this.lastNode.next = new ListNode(element);
      this.lastNode = this.lastNode.next;
    }
    this.length++;
  }

  dequeue() {
    const temp = this.firstNode.value;
    if (this.lastNode === this.firstNode) {
      this.lastNode = null;
    }
    this.firstNode = this.firstNode.next;
    this.length--;
    return temp;
  }
}

module.exports = Queue;
