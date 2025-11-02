const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.list = null;
  }

  getUnderlyingList() {
    if (!this.list) {
      return null;
    }
    const result  = {};
    let temp = result;
    let current = this.list;
    while (current) {
      temp.value = current.value;
      if (current.next) {
        temp.next = {};
      } else {
        temp.next = null;
      }
      current = current.next;
      temp = temp.next;
    }
    return result;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.list) {
      this.list = newNode;
    } else {
      let current = this.list;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  dequeue() {
    if (!this.list) {
      return undefined;
    }
    const dequeuedValue = this.list.value;
    this.list = this.list.next;
    return dequeuedValue;
  }
}

module.exports = {
  Queue
};
