'use strict';

const faker = require('faker');

const Queue = require('./lib/queue');
const companyID = 'unicorn-dresses';
const queue = new Queue(companyID);

setInterval( () => {
  queue.trigger('pickup', {
    store: companyID,
    code: faker.random.uuid(),
    orderID: faker.random.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
  })
}, 1000);