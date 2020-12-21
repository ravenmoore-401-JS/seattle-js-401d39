'use strict';

// const EventEmitter = require('events');

// // class MyEmitter extends EventEmitter {} // in case I want to put any special methods or properties in this event

// const events= new EventEmitter();
// // we are listening for the word 'event'. When we hear the word 'event', we are running a callback function that console.logs, 'an event occured!'
// events.on('event', () => {
//   console.log('an event occurred!');
// });

// // we are emitting the word event
// events.emit('event');

/////////////////////
const Events = require('events');

const events = new Events(); // make a new Event Pool - ONLY MAKE ONE!!!

events.on('light', () => console.log('I saw the light!'));

events.on('light', eyelid);
events.on('light', mouth);
events.on('light', arm);
events.on('light', hands);
events.on('light', body);
events.on("light", iris);
events.on('light', stomach);
events.on('tears', cry);
// events.on('light', torso);
events.on('light', face);
events.on('light', skin);
events.on('light', hand);
events.on('light', hands)
events.on('light', feet);

function feet(payload) {
  if(payload.brightness >= 50) {
    console.log('Run away!');
  } else { console.log('Run toward the light.')}
}
function hands(payload){
  if (payload.brightness <= 10) {
    console.log('It\'s too dark, hands are reaching out');
  }
}

function skin(payload){
  if(payload.brightness >=35){
    console.log('I am burning!');
  }
}

function hand(payload){
  if(payload.brightness >= 35){
  console.log('Hand puts on sunscreen.');
  }
}

function face(payload){
  if(payload.brightness>=10){
    console.log('screaming at the sun')
  }
}
function face(payload){
  if(payload.brightness>=60){
    console.log('getting a farmers tan')
  }
}

function cry(payload){
  if (payload.brightness >= 100){console.log('my eyes are shedding tears');}
}

function stomach(payload) {
  if (payload.brightness > 50) {
    console.log('It must be morning, time for coffee!');
  }
}

function iris(payload){
  if (payload.brightness >= 50){console.log("iris constrict 50%");}
  else if (payload.brightness  === 100){console.log("iris are fried");}
  else {console.log("iris are normal");}
}

function body(payload){
  if(payload.brightness === 100){
    console.log('body bursts into flames');
  }
}


function arm(payload) {
  if(payload.brightness >= 90){
    console.log('covering eyes');
  }
}

function mouth(payload){
  if(payload.brightness >= 75){
    console.log('it is too bright!');
  }
}

function eyelid(payload){
  if(payload.brightness >= 75){
    console.log('eyes are squinting');
  }
}

setInterval(() => {
  let brightness = Math.ceil(Math.random() * 100);
  console.log('Brightness:', brightness);
  events.emit('light', {brightness});
}, 2000)