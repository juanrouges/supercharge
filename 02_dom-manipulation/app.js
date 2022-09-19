"use strict";

console.log('Connected ... ');

// 1. Select the section with an id of container without using querySelector.
const containerOne = document.getElementById('container');
console.log(containerOne);

// 2. Select the section with an id of container using querySelector.
const containerTwo = document.querySelector('#container');
console.log(containerTwo);

// 3. Select all of the list items with a class of “second”.
const listOne = document.querySelectorAll('.second');
console.log(listOne);

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
const orderedList = document.querySelector('ol');
console.log(orderedList.querySelector('.third'));

// 5. Give the section with an id of container the text “Hello!”.
const text = 'Hello';
const containerThree = document.querySelector('#container');
containerThree.prepend(text);

// 6. Add the class main to the div with a class of footer.
const footer = document.querySelector('.footer');
footer.classList.add('main');

// 7. Remove the class main on the div with a class of footer.
footer.classList.remove('main');

// 8. Create a new li element.
const li = document.createElement('li');

// 9. Give the li the text “four”.
li.innerText = 'four';
console.log(li);

// 10. Append the li to the ul element.
const ul = document.querySelector('ul');
ul.append(li);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
const orderedListTwo = document.querySelector('ol');
const list = orderedListTwo.querySelectorAll('li');
for (let li of list) {
  li.style.backgroundColor = 'green';
}

// 12. Remove the div with a class of footer
footer.remove();