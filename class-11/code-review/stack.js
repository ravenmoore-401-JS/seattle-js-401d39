'use strict';

class Stack {
  
  constructor() {
    this.length = 0;
  }

  push(item) {
    // take however many things are in this stack (from index 0), add one to that and set that item equal to that value at that index
    this[this.length++] = item;
  }

  pop() {
    if(!this.length){
      throw new Error('the stack is empty')
    }
    // take however long the length is, subtract one and set the item equal to it
    // {0:item1, 1:item2, 2:item3}
    let item = this[this.length - 1]; // 3:item3
    delete this[this.length - 1]; // 3:item3
    this.length--; //2
    return item; // item3
  }

  peek() {
    if(!this.length){
      throw new Error('the stack is empty')
    }

    return this[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }
}