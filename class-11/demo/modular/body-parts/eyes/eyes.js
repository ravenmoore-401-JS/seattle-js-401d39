'use strict';

// bring in the event pool
const events = require('../../event-pool');

// brain tells eyes how much light it saw
events.on('light', eyelid);

function eyelid(payload) {
  // console.log('in the eyelid function', payload)
  // { brightness: { brightness: 16 } }
  if(payload.brightness >= 75){
    console.log('eyes are squinting');
  }
}

// The eyes see the light and send that info to the brain
// every time we blink (which will be every 2 second), we will tell the brain how much light was decected
setInterval(() => {
  let brightness = Math.ceil(Math.random() * 100);
  console.log('Brightness:', brightness);
  events.emit('light-detected', brightness);
}, 2000);

module.exports = eyelid;