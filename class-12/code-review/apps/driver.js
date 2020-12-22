'use strict';

const events = require('../lib/events');

// Monitor the system for events …
// On the ‘pickup’ event …
events.on('pickup', handlePickupEvent);

function handlePickupEvent(pickupPayload) {
  // Wait 1 second
  // Log “DRIVER: picked up [ORDER_ID]” to the console.
  // Emit an ‘in-transit’ event with the payload you received
  setTimeout(() => {
    console.log(`DRIVER: picked up ${pickupPayload.orderID}`);
    events.emit('in-transit', pickupPayload);
  }, 1000)

  setTimeout(() => {
    // Wait 3 seconds
    // Log “delivered” to the console
    // Emit a ‘delivered’ event with the same payload
    console.log(`DRIVER: delivered up ${pickupPayload.orderID}`);
    events.emit('delivered', pickupPayload);
  }, 3000)
}