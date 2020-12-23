'use strict';

require('dotenv').config();
const faker = require('faker');
const io = require('socket.io-client');

// connect to the CAPS name space
const socket = io.connect('http://localhost:3000/caps');

// emit 'join' with the name of a room(name of my store)
// put the vendor in a private room where they are only listening for events that come to them
socket.emit('join', process.env.STORE);

setInterval(() => {
  let delivery = {
    store: process.env.STORE,
    orderID: faker.random.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`
  }

  socket.emit('pickup', delivery);
}, 500)