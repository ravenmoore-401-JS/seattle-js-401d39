'use strict';

const dynamoose = require('dynamoose');

const mugSchema = new dynamoose.Schema({
  'id': String,
  'capacity': Number,
  "color": {
    "type": Array,
    "schema": [String]
  },
  'dropable': { type:Boolean, default: true}
});

module.exports = dynamoose.model('mug', mugSchema);