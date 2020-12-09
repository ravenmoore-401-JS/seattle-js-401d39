'use strict';

const express = require('express');
const app = express();

// our middleware
const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handler/404');
const serverError = require('./error-handler/500');
const bananaRoutes = require('./routes/banana-routes');

// my middleware
app.use(express.json());
app.use(logger);
app.use(bananaRoutes);

app.get('/demo', demoCallbackHandler);

function demoCallbackHandler(req, res, next){
  res.status(200).send('alive');
}

// CRUD - CREATE - READ - UPDATE - DELETE
// REST - post      get    put      delete



app.use('*', notFoundHandler);
app.use(serverError);

module.exports = {
  server: app,
  start: port => {
    if(!port) { throw new Error('missing port');}
    app.listen(port, () => {
      console.log(`listening on ${port}`);
    })
  }
}