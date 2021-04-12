/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stackData = [];
    this.heightIndex = 0;
  }

  push(element) {
    this.stackData[this.heightIndex] = element;
    this.heightIndex++;
  }

  pop() {
    if (this.stackData.length !== 0) {
      this.heightIndex--;
      return this.stackData[this.heightIndex];
    }
    return 1;
  }

  peek() {
    return this.stackData[this.heightIndex - 1];
  }
}

module.exports = Stack;
