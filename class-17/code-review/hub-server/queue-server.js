'use strict';

// TODO: need a way to handle 'in-transit' and 'delivered' and 'getall'
// TODO: need a way to confirm with the vendor
// TODO: need a way to listen for a confirm that the driver got the message and remove the message from the queue

// A Queue Server Hub that keeps a log of the delivery, keyed by retailer and event type
// Broadcasts “Delivery Confirmations” to retailers

const io = require('socket.io')(3000);
const uuid = require('uuid').v4;

const messages = {}

// messages.pickup.driver.23 = payload
// messages['pickup']['driver'][messageID] = payload

/**
  {
    pickup: {
      driver: {
        23: {
          store: companyID,
          code: 1920e90u,
          orderID: 2093302375,
          customer: bob smith
          address: 13rd pl
        }
      }
    },

    delivered: {

    }
  }

 */

const caps = io.of('/caps');

caps.on('connection', socket => {
  console.log(`${socket.id} joined the caps name space`);

  // listen for the pickup event
  socket.on('pickup', message => {
    let messageID = uuid();

    // put the message in my messages queue
    messages['pickup']['driver'][messageID] = message.payload;

    // send a confirmation 
    caps.in('driver').emit('pickup', {messageID, payload:message.payload})
  })
})