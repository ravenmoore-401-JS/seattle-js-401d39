'use strict';

const events = require('./lib/events');
require('./apps/driver');
require('./apps/vendor');

// Manages the state of every package (ready for pickup, in transit, delivered, etc)
// Logs every event to the console with a timestamp and the event payload
// i.e. “EVENT {}”

// three kinds of events: pickup, in-transit, delivered
// need to log each one with a payload, time, and event

events.on('pickup', (payload) => logEvent('pickup', payload));
events.on('in-transit', (payload) => logEvent('in-transit', payload));
events.on('delivered', (payload) => logEvent('delivered', payload));

function logEvent(event, payload) {
  const time = new Date().toString();
  console.log('EVENT', { event, time, payload });
}
