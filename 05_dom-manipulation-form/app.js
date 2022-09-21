"use strict";

console.log('Connected ... ');

const form = document.querySelector('#logoForm');
const brandInput = form.querySelector('#brand-name');
const brandColor = form.querySelector('#brand-color');
const fontSize = form.querySelector('#font-size');

console.log(brandInput);

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(brandColor.value);
})