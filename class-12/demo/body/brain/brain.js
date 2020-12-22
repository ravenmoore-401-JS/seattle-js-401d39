'use strict';

const port = process.env.PORT || 3000;

const io = require('socket.io')(port);

const guts = io.of('/digestive-system');
const healthSystem = io.of('/health-system');

io.on('connection', (socket) => {
  // console.log('You are now connected to the BRAIN', socket.id);

  socket.on('light', (payload) => {
    // console.log('The BRAIN heard the word LIGHT', payload);
    io.emit('brightness', payload);
  })

  socket.on('smell', (payload) => {
    // console.log('The BRAIN heard the word SMELL', payload);
    io.emit('smell', payload);
  })
})

guts.on('connection', (socket) => {
  console.log('You are now connected to the GUTS', socket.id);

  // listening in this namespace for the word 'hungry', when we hear it, we send, 'hungry' back to the entry namespace of guts
  socket.on('hungry', (payload) => {
    console.log('In the BRAIN - heard the word HUNGRY - sending out the word HUNGRY', payload);
    guts.emit('hungry', payload);
  })
})

healthSystem.on('connection', (socket) => {
  console.log('You are now connected to the HEALTH SYSTEM', socket.id);

  socket.on('cold', (payload) => {
    console.log('in the BRAIN - heard the world COLD - sending out BUG', payload);
    healthSystem.emit('bug', payload);
  })
})