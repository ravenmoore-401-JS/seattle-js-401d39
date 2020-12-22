'use strict';

const io = require('socket.io-client');

const host = 'http://localhost:3000';

// const brainConnection = io.connect(host);
// const dsConnection = io.connect(`${host}/digestive-system`);
const healthConnect = io.connect(`${host}/health-system`);

healthConnect.emit('cold', { level: 4 });

// dsConnection.emit('hungry', { level: 10 });

// brainConnection.emit('light', { level: 90 });

// brainConnection.emit('smell', { scent: 'freshly cut grass' });