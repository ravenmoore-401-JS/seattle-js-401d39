'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3000/family');

const chore = process.argv.splice(2)[0];
console.log(chore);

// process.argv[0] = path to my Node
// process.argv[1] = path to the file that I'm working in
// proeses.argv[2] = the words that I entered into the terminal!!!!!

// [
//   '/Users/lenaeivy/.nvm/versions/node/v14.6.0/bin/node', 
//   '/Users/lenaeivy/codefellows/teaching/401/seattle-js-401d39/class-13/demo/queue/parent.js',
//   'clean up dog poo'
// ]

socket.emit('new chore', chore);

// when the parent hears this, they can breath easy - their chore was added to the queue successfully
socket.on('added', () => {
  console.log('in the PARENT - heard ADDED so I am disconnecting');
  socket.disconnect();
})