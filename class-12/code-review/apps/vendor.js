'use strict';

const events = require('../lib/events');
const faker = require('faker');

// Declare your store name (perhaps in a .env file, so that this module is re-usable)
// Every 5 seconds, simulate a new customer order
// Create a fake order, as an object:
// storeName, orderId, customerName, address

setInterval(() => {

  let delivery = {
    storeName: 'Fancy Cat Dresses',
    orderID: faker.random.uuid(),
    customerName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()} ${faker.address.stateAbbr()}`
  }

  // Emit a ‘pickup’ event and attach the fake order as payload
  events.emit('pickup', delivery);

}, 5000)

events.on('delivered', handleDelivery);

function handleDelivery(payload) {
  console.log( `VENDOR: Thank you for delivering ${payload.orderID}`);
}
// Monitor the system for events …
// Whenever the ‘delivered’ event occurs
// Log “thank you” to the console