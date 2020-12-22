'use strict';

const port = process.env.PORT || 3000;

const io = require('socket.io')(port);

// I have created a hub that anyone can connect to (if they know where it is)
// I am listening for someone to connect
// The socket is like a direct phone line to the person who is connecting
io.on('connection', (socket) => {

  // we can identify a users socket
  console.log('Welcome to the HUB, your socket id is: ', socket.id);

  socket.on('hello', (payload) => {
    console.log('The HUB heard hello with the payload: ', payload);
    
    // the client is going to hear this
    // io is going to emit this is everyone
    // socket is when you just want to send to that one person (like talking them on a phone line)
    io.emit('hi', `HI ${payload}`);
  });

})