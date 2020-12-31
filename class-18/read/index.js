'use strict';

const mugModel = require('./mug.schema');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  console.log('__id__', id);
  
  try{

    let data;
    // check to see if there is an id
    // if there is
    // query the DB to find the record with the id and return it
    if(id){
      const list = await mugModel.query('id').eq(id).limit(1).exec();
      data = list;
    } else {
    // if there isn't, 
    // return all the records
      data = await mugModel.scan().exec();
    }
    return  {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      response: JSON.stringify(e)
    }
  }
};