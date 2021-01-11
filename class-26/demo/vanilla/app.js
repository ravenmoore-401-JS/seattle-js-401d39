'use strict';

let state = {};

const input = document.getElementById('wordsInput');

input.addEventListener('change', handleWords);

function handleWords(e){
  // console.log(e.target);
  state.words = e.target.value;
  render();
}

const button = document.getElementById('clickme');

button.addEventListener('click', handleClick);

function handleClick(e){
  e.preventDefault();
  console.log('input', state.words);
  const words = state.words.split('');
  const reversedWords = words.reverse();
  state.words = reversedWords.join('');

  render();
}

function render() {
  document.getElementById('words').textContent = state.words;
}

function init() {
  state.words = 'nothing to see here';
  render();
}

init();