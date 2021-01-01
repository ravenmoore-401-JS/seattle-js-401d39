// all lambdas are async
// all lambdas automatically get an event as a parameter
exports.handler = async (event) => {
  // the "event" contains all the information from the Query String, Body, Params, Event Type, Headers

  console.log('__EVENT__', event);

  const a = event.body.a || 0;
  const b = event.body.b || 0;
  const sum = a + b;

  // a lambda function always returns a response object
  // status code: must be a valid HTTP status
  // body: must be a string containing the function's output
  const response = {
    statusCode: 200,
    body: `The sum of ${a} and ${b} is ${sum}`,
  }

  return response;
};