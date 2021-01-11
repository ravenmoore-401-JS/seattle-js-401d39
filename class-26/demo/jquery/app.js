'use strict';

let state = {};

$('#wordsInput').on('change', handleWords);
$('#clickme').on('click', handleClick);

function handleWords(e){
  // console.log(e.target);
  state.words = e.target.value;
  render();
}

function handleClick(e){
  e.preventDefault();
  console.log('input', state.words);
  const words = state.words.split('');
  const reversedWords = words.reverse();
  state.words = reversedWords.join('');

  render();
}

function render() {
  // fill the stuff ID with the results from the handlebars template
  $('#words').html(state.words);
}

function init() {
  state.words = 'nothing to see here';
  render();
}

// wait until the DOM is completely loaded and then run what is in the function
$(function(){
  init();
});