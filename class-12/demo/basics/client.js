'use strict';

const io = require('socket.io-client');

const host = 'http://localhost:3000';

// connect to the host
const socket = io.connect(host);

// listen for the 'hi' event
socket.on('hi', payload => {
  console.log('the HUB said: ', payload);
})

socket.emit('hello', 'Tina');