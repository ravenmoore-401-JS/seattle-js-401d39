const AWS = require('aws-sdk');

// new instance of the s3 communication object
const s3 = new AWS.S3();

// constrants
const MAX_WIDTH = 100;
const MAX_HEIGHT = 100;

exports.handler = async (event) => {
  console.log('__EVENT__', event);

  return {
    statusCode: 200,
    body: 'foobar'
  }
}