'use strict';

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(item) {
    let queuedItem = { value: item, next: null };

    // if we already have a rear, point our next property to our queuedItem
    if(this.rear){ this.rear.next = queuedItem }

    this.rear = queuedItem;

    if(!this.front){ this.front = queuedItem }
  }

  dequeue() {
    if(!this.front){ throw new Error('the Queue is empty')}
    
    const temp = this.front;

    this.front = this.front.next;

    return temp.value;
  }

  peek() {
    if(!this.front){ throw new Error('the Queue is empty')}

    return this.front.value;
  }

  isEmpty() {
    return !this.front;
  }

}

module.exports = Queue;