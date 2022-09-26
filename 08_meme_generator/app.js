"use strict";

console.log('Connected ...');

// =====================================================
// unique id function copied on Sep 25, 2022
// at https://gist.github.com/gordonbrander/2230317
// from github username "chaitanyabd"
// =====================================================
function uid() {
  let a = new Uint32Array(3);
  window.crypto.getRandomValues(a);
  return (performance.now().toString(36)+Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g,"");
};
// =====================================================

const resultsArea = document.querySelector('#resultsArea');
const resultsEmpty = document.querySelector('#resultsEmpty');
const form = document.querySelector('form');

// Check localStorage for tasks
let memes = JSON.parse(localStorage.getItem('memes')) || [];
// if local storage has items, populate
if (memes.length > 0 ) {
  resultsEmpty.classList.add('hidden');
  for (let index of memes) {
    // parent element
    let memerise = document.createElement('div');
    memerise.classList.add('memerise');
    memerise.setAttribute('data-id', index.id);
    // delete button
    let button = document.createElement('button');
    button.classList.add('button_label');
    button.innerHTML = '&#10005; Delete';
    memerise.append(button);    
    // meme inner
    let memeriseInner = document.createElement('div');
    memeriseInner.classList.add('memerise_inner');
    memerise.append(memeriseInner);
    // Text top
    let textTop = document.createElement('div');
    textTop.classList.add('memerise_top');
    textTop.innerText = index.textTop;
    memeriseInner.append(textTop);
    // Text bottom
    let textBottom = document.createElement('div');
    textBottom.classList.add('memerise_bottom');
    textBottom.innerText = index.textBottom;
    memeriseInner.append(textBottom);
    // meme image
    let image = document.createElement('img');
    image.src = index.imageUrl;
    image.width = '500';
    memeriseInner.append(image);

    resultsArea.prepend(memerise);
  }
} else {
  resultsEmpty.classList.remove('hidden');
}

// Form handler
form.addEventListener('submit', function(event) {
  // prevent for default behaviour 
  event.preventDefault();
  // meme object
  let item = {id: uid(),};
  // parent element
  let memerise = document.createElement('div');
  memerise.classList.add('memerise');
  memerise.setAttribute('data-id', item.id);
  // delete button
  let button = document.createElement('button');
  button.classList.add('button_label');
  button.innerHTML = '&#10005; Delete';
  memerise.append(button);
  // meme inner
  let memeriseInner = document.createElement('div');
  memeriseInner.classList.add('memerise_inner');
  memerise.append(memeriseInner);
  // Text top
  let textTop = document.createElement('div');
  textTop.classList.add('memerise_top');
  memeriseInner.append(textTop);
  // Text bottom
  let textBottom = document.createElement('div');
  textBottom.classList.add('memerise_bottom');
  memeriseInner.append(textBottom);
  // meme image
  let image = document.createElement('img');
  memeriseInner.append(image);
  // checkk for form fields
  let fields = form.querySelectorAll('input[type="text"]');
  // assign values
  for (let el of fields) {
    if (el.getAttribute('name') === 'img_url') {
      item.imageUrl = !el.value ? 'https://placehold.co/500x600' : el.value;
      image.src = item.imageUrl;
      el.value = '';
    }
    else if (el.getAttribute('name') === 'text_top') {
      item.textTop = el.value;
      textTop.innerText = item.textTop;
      el.value = '';
    }
    else if (el.getAttribute('name') === 'text_bottom') {
      item.textBottom = el.value;
      textBottom.innerText = item.textBottom;
      el.value = '';
    }
  };
  resultsEmpty.classList.add('hidden');
  memerise.append(memeriseInner);
  resultsArea.prepend(memerise);

  memes.push(item);

  localStorage.setItem('memes', JSON.stringify(memes));  
});

resultsArea.addEventListener('click', function(event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
    for (let key in memes ) {
      if (memes[key].id === event.target.parentElement.getAttribute('data-id')){
        memes.splice(key, 1);
      }
    }
    if (memes.length < 1) resultsEmpty.classList.remove('hidden')
    localStorage.setItem('memes', JSON.stringify(memes));  
  }
});