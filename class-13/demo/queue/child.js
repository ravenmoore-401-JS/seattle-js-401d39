'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3000/family');

socket.emit('getall');

// listens for a chore and when it gets the message of 'chore' will send a confirmation that it got it
socket.on('chore', message => {
  console.log('in the CHILD - I have a new chore I have to do', message.payload);
  socket.emit('received', message);
})