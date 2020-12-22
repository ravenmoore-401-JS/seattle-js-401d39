'use strict';

// make eyes a client of socket.io/ my brain
const io = require('socket.io-client');
const host = "http://localhost:3000";
const brainConnection = io.connect(host);

brainConnection.on('brightness', handleBrightness);
brainConnection.on('smell', handleSmell);

function handleSmell(payload) {
  if(payload.scent === 'freshly cut grass') {
    console.log('eyes are watering');
  }
}

function handleBrightness(payload) {
  if(payload.level >= 90 ){
    console.log('close your eyes!')
  } else if (payload.level >= 50 ){
    console.log('squint');
  }
}