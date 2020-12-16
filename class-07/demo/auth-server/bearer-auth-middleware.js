'use strict';

const users = require('./users');

module.exports = (req, res, next) => {
  console.log('headers',req.headers)
  let token = req.headers.authorization.split(' ').pop();
  console.log('token', token)

  users.authenticateWithToken(token)
    .then(validUser => {
      req.user = validUser;
      next();
    })
    .catch(err => next(err.message));
}