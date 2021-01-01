'use strict';

const io = require('socket.io-client');

class Queue {
  // need to keep track of my client via my client id 
  // need to keep track of how I am connecting to my hub via my url
  constructor(id) {
    this.id = id;
    this.socket = io.connect('http://localhost:3000');
  }

  // this method is going to allow me to resuse code over and over
  trigger(event, payload) {
    this.socket.emit(event, { clientID: this.id, payload });
  }
}

module.exports = Queue;