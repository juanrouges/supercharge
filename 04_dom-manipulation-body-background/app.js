"use strict";

console.log("Connected ... ");

const body = document.querySelector('body');

window.addEventListener('resize', function(event) {
  console.log('Inner Width', window.innerWidth);
  console.log('Inner Height', window.innerHeight);
});

document.addEventListener('mousemove', function(event) {
  console.log(event);
  console.log(`rgb(${event.x}, 0, ${event.y})`);
  body.style.backgroundColor = `rgb(${event.x}, 0, ${event.y})`;
})