'use strict';

class Stack {
  constructor(){
    this.storage = new Array();
    this.top = null;
  }

  peek() {
    // O(1)
    if(!this.top){throw new Error('Stack is empty - cannot peek');}
    return this.top; // return this.storage[0];
  }

  push(item) {
    // O(n)
    this.storage.unshift(item);
    this.top = item;
  }

  pop() {
    // O(n)
    const item = this.storage.shift();
    // reassign my top to the new top of the stack/array
    this.top = this.storage[0];
    // return the item that I poped off
    return item;
  }
}

module.exports = Stack;