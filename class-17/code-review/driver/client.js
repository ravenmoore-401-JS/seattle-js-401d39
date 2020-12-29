'use strict';

// TODO: I need to get all of my missed events
// TODO: driver need to connect to 'driver' room

const Queue = require('./lib/queue');
const queue = new Queue('driver');

queue.subscribe('pickup', payload => {
  console.log('Pickup up', payload);
  pickup(payload);
});

function pickup(payload) {
  // emit 'in-transit' every second
  setTimeout(() => {
    queue.trigger('in-transit', payload);
    // deliver
    deliver(payload);
  }, 1000);
}

function deliver(payload) {
  setTimeout(() => {
    queue.trigger('delivered', payload);
  }, 1500);
}