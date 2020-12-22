'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000';
const brainConnection = io.connect(host);

brainConnection.on('smell', handleSmell);

function handleSmell(payload) {
  console.log(`I smell ${payload.scent}`);
  if(payload.scent === 'freshly cut grass'){
    console.log('sneeze');
  }
}