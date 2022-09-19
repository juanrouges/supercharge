"use strict";

console.log('Connected ... ');

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  return `rgb(${r}, ${g}, ${b})`;
}

const body = document.querySelector('body');
const h1 = document.querySelector('h1');

body.style.backgroundColor = "#000"

h1.style.textTransform = "uppercase";
h1.style.fontFamily = "sans-serif";
h1.style.fontSize = "80px";

let letters = h1.querySelectorAll('span');

setInterval(function() {
  for (const index of letters) {
    index.style.color = randomColor();
    index.style.transition = "color 500ms"
  }
} , 500)