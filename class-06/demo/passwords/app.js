'use strict';

let base64 = require('base-64');
let bcrypt = require('bcrypt');

///////////////base 64///////////////////////

// 1. Make the data binary and regroup it into groups of 4
// 2. Find the decimal version of each of the 6 bit binary chunks
// 3. Find the Base 64 symbol for each of those decimals

let string = 'someusername:p@ssw0rD!';

let encodedString = base64.encode(string);
// console.log('encoded string', encodedString);

let decodedString = base64.decode(encodedString);
// console.log('decoded string', decodedString);

let newEncodedString = base64.encode(string);
// console.log('new encoded string', newEncodedString);

///////////////////bcrypt/////////////////////////

// bcrypt will hash the password
// Hashing algorithms turns a plain texts password into a new fixed-length string
// before we hash, we salt
// salt is a random string that we apply to the password to make it unpredictalbe
// encryption is a one-way street

// the way it works
// user saves their password and it gets encrypted and stored in the database
// then, when the user tries to log-in, we encrypt the password and compare it with the encrypted password in the database (will NOT be the same - visually)

let password = 'P@55w0rD!';
let complexity = 5;

let newPassword = 'Password';

encrypt(password, complexity);

async function encrypt(pw, round) {
  let hashed1 = await bcrypt.hash(pw, round);
  console.log('our hashed password', hashed1);

  let p1 = '$2b$05$25Sl08BWjCmiz0fs20q83uwyM66bISSxNGPbHtoSGEm7Xv7LZPaRK'

  let isH1Valid = await bcrypt.compare(newPassword, hashed1);

  console.log('is valid', isH1Valid);
}