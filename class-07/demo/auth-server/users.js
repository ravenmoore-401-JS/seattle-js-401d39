'use strict';

const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// probably lives in a .env file
const SECRET = 'secretstuff';

const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true}
}, { toJSON: { virtuals: true }});

users.virtual('token').get(function () {
  // I can put whatever I want in this object. It is going to be the value of the token key
  let tokenObject = {
    username:this.username,
  }

  // jwt.sign is going to encode the token
  // we want to encode with a secret so that we know it is legit
  return jwt.sign(tokenObject, SECRET);
})

// will run every time someone runs saves
users.pre('save', async function() {
  if(this.isModified('password')){
    console.log('in the pre')
    this.password = await bcrypt.hash(this.password, 10);
  }
})

users.statics.authenticateBasic = async function (username, password) {
  const user = await this.findOne({ username });
  const valid = await bcrypt.compare(password, user.password);
  if(valid) { return user }
  throw new Error('Invalid User');
}

users.statics.authenticateWithToken = async function (token) {
  // verify if that token is real
  try {
    const parsedToken = jwt.verify(token, SECRET);
    const user = this.findOne({ username: parsedToken.username });
    if(user) { return user; }
    throw new Error('user not found');
  } catch (e) {
    throw new Error (e.message);
  }
  // if it is, send back the user object
  // if not, send an error
}

module.exports = mongoose.model('users', users);