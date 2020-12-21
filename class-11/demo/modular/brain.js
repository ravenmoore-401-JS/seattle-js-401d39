'use strict';

const events = require('./event-pool');

// require our body parts so they will hear our events
require('./body-parts/arms/arms');
require('./body-parts/eyes/eyes');

events.on('light-detected', (payload) => {
  console.log('emitting - light - from our brain with our payload', payload);
  events.emit('light', {brightness: payload});
})