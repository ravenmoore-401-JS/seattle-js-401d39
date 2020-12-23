'use strict';

const uuid = require('uuid').v4;
const io = require('socket.io')(3000);
const family = io.of('/family');

// I need a Queue - a place to store my chores in case the child is not listening to my emits
const queue = {
  chores: {}
}

family.on('connection', socket => {
  socket.on('new chore', payload => {
    console.log('in the HUB - heard a NEW CHORE', payload);

    // 1. I need a unique ID
    const id = uuid();

    // 2. save the payload to the chore queue with the id as the key and payload as the value

    // chores = {
    //   12i029r0u09e029: "wash your hair"
    // }
    queue.chores[id] = payload;

    // 3. send out to the socket space that the chore was added
    socket.emit('added');
    
    // 4. send out 'chore' with the id and payload to the name space (parent adn child)
    family.emit('chore', {id, payload});
  });

  socket.on('getall', () => {
    console.log('in the HUB - listing to GETALL');
    // 1. loop thorugh all of the keys in the chore queue
    Object.keys(queue.chores).forEach(id => {
      // 2. for each id, emit 'chore' with the id and payload
      socket.emit('chore', {id, payload: queue.chores[id]});
    })
  })

  // if we get the 'received' message, then we know that the child got the chore so we don't need to tell them again. That means we can delete it from the Queue
  socket.on('received', message => {
    console.log('in the HUB - heard RECEIVED', message);
    delete queue.chores[message.id];
  })
})