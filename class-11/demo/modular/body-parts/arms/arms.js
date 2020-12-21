'use strict';

const events = require('../../event-pool');
const handlers = require('./arms-handlers');

// this module will contain all of the listeners for arms

events.on('light', handlers.coverEyes);
events.on('light', handlers.fumbleForWall);