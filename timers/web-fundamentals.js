"use strict";

console.log("Connected ...");

// ========================================================================================
// Write a function called countdown that accepts a number as a parameter and 
// every 1000 milliseconds decrements the value and console.logs it. Once the 
// value is 0 it should log “DONE!” and stop.
// ========================================================================================

function countdown(x) {
  let num = x;
  let display = setInterval(function() {
    num = num - 1;
    if (num === 0) {
      console.log("Done");
      clearInterval(display);
    } else {
      console.log("num", num);
    }
  }, 1000);

};

countdown(10);

// ========================================================================================
// Write a function called randomGame that selects a random number between 0 and 1 every 
// 1000 milliseconds and each time that a random number is picked, add 1 to a counter. 
// If the number is greater than .75, stop the timer and console.log the number of tries 
// it took before we found a number greater than .75.
// ========================================================================================

function randomGame() {
  let counter = 0;
  let start = setInterval(function() {
    let random = Math.random();
    if (random < 0.75) {
      counter = counter + 1;
    } else {
      console.log(`It took ${counter} try/ies`)
      clearInterval(start);
    }
  }, 1000)
};

randomGame();