'use strict';

const Queue = require('../queue');

describe('queue', () => {
  it('dequeues', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
  });

  it('peeks', () => {
    const queue = new Queue();
    expect(() => queue.peek()).toThrow('the Queue is empty');
  })
})