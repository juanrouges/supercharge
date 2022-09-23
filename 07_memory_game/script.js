console.log('Connected ...');

const gameContainer = document.getElementById("game");

// My variables
let targetOne = null;
let targetTwo = null;
let isClickable = true;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  console.log('Hello')
  if (!isClickable) return;
  if (event.target.classList.contains('currentTarget')) return;

  let currentTarget = event.target;
  currentTarget.style.backgroundColor = currentTarget.classList[0];

  console.log(currentTarget);
   
  if (!targetOne || !targetTwo) {
    targetOne = targetOne || currentTarget;
    targetTwo = currentTarget === targetOne ? null : currentTarget ;
    currentTarget.classList.add('currentTarget');
  }

  if (targetOne && targetTwo) {
    isClickable = false;    
    let elementOne = targetOne.className;
    let elementTwo = targetTwo.className;

    if (elementOne === elementTwo) {
      console.log('they ARE the same');
      targetOne.removeEventListener('click', handleCardClick);
      targetTwo.removeEventListener('click', handleCardClick);
      targetOne = null;
      targetTwo = null;
      isClickable = true;
    } else {
      setTimeout(function() {
        targetOne.style.backgroundColor = '';
        targetTwo.style.backgroundColor = '';
        targetOne.classList.remove('currentTarget');
        targetTwo.classList.remove('currentTarget');
        targetOne = null;
        targetTwo = null;
        isClickable = true;
      }, 1000);
      console.log('they ARE NOT the same');
    }   
  }

}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */