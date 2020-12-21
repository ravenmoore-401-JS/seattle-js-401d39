'use strict';

function coverEyes(payload) {
  if(payload.brightness >= 90 ){
    console.log('covering eyes');
  }
}

function fumbleForWall(payload) {
  if(payload.brightness <= 20) {
    console.log('fumble for wall');
  }
}

module.exports = {coverEyes, fumbleForWall}