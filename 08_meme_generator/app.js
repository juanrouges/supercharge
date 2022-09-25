"use strict";

console.log('Connected ...');

let sample = [
  {
    id: '675rhjbj',
    imageUrl: 'https://imgflip.com/s/meme/But-Thats-None-Of-My-Business.jpg',
    textTop: 'Lorem ipsum de l apava',
    textBottom: 'Rimulo constanza se la veriguodfrt ber ith',
  }
]

// ===========================================================================
// Found this unique way of creating ids, from a github user blog post.
// I lost the URL for the time being but Will find and attached 
// to give credit to developer
// ===========================================================================
function uid() {
  let a = new Uint32Array(3);
  window.crypto.getRandomValues(a);
  return (performance.now().toString(36)+Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g,"");
};
// ===========================================================================

const resultsArea = document.querySelector('#resultsArea');
const resultsEmpty = document.querySelector('#resultsEmpty');
const form = document.querySelector('form');

// Check localStorage for tasks
let memes = JSON.parse(localStorage.getItem('memes')) || [];

// Form handler
form.addEventListener('submit', function(event) {
  event.preventDefault();
  // parent element
  let memerise = document.createElement('div');
  memerise.classList.add('memerise');
  // delete area
  let close = document.createElement('div');
  close.classList.add('memerise_close');
  memerise.append(close);
  // delete button
  let button = document.createElement('button');
  button.classList.add('button_label');
  button.innerHTML = '&#10005; Delete';
  close.append(button);
  // Text top
  let textTop = document.createElement('div');
  textTop.classList.add('memerise_top');
  memerise.append(textTop);
  // Text bottom
  let textBottom = document.createElement('div');
  textBottom.classList.add('memerise_bottom');
  memerise.append(textBottom);
  // meme image
  let image = document.createElement('img');
  memerise.append(image);
  // checkk for form fields
  let fields = form.querySelectorAll('input[type="text"]');
  for (let el of fields) {
    if (el.getAttribute('name') === 'img_url') {
      image.src = el.value;
    }
    else if (el.getAttribute('name') === 'text_top') {
      textTop.innerText = el.value;
    }
    else if (el.getAttribute('name') === 'text_bottom') {
      textBottom.innerText = el.value;
    }
  };

  resultsArea.append(memerise);
});