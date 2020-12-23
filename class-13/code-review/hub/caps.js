'use strict';

// set up our HUB
const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('Welcome to the HUB', socket.id);
});

// name space for caps
const caps = io.of('/caps');

caps.on('connection', (socket) => {
  console.log('Welcome to the CAPS name spapce, ', socket.id);

  // a way for vendors to join the rooms (private spaces)
    // so that we can send them direct messages
  socket.on('join', room => {
    // log that they joined the room
    console.log(`${socket.id} is joining ${room}`);
    socket.join(room);
  });

  // when it hears 'pickup', let everyone know in this name space that 'pickup' happened
  socket.on('pickup', (payload) => {
    // log it
    caps.emit('pickup', payload);
  });

  // when it hears 'in-transit', we only want to let the STORE know that it is in-transit
  socket.on('in-transit', (payload) => {
    // payload.store is the same as the room name of the store
    // so we are only emitting to that specific room
    caps.to(payload.store).emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    // payload.store is the same as the room name of the store
    // so we are only emitting to that specific room
    caps.to(payload.store).emit('delivered', payload);
  });


  
})

// log everything - event, time, payload
  // 'delivery', 'in-transit', 'pickup'

