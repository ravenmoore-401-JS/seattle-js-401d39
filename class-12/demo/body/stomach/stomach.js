'use strict';

const io = require('socket.io-client');
const host = "http://localhost:3000";

const dsConnection = io.connect(`${host}/digestive-system`);
const healthConnection = io.connect(`${host}/health-system`);

dsConnection.on('hungry', handleHungry);
healthConnection.on('bug', handleBug);

function handleHungry(payload) {
  if(payload.level >= 5){ console.log('EAT!') }
  if(payload.leve < 5) { console.log('Drink water')}
}

function handleBug(payload) {
  if(payload.level > 3){ console.log('BLAHHHHHH!!!!')}
}