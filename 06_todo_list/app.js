"use strict";

console.log('Connected ...');

// Elements
const addItemForm = document.querySelector('#addItemForm');
const todoList = document.querySelector('#todoList');

// Form Submit Add New 
addItemForm.addEventListener('submit', function(event) {
  event.preventDefault();
  let target = event.currentTarget;
  let todoItem = document.createElement('li');
  todoItem.classList.add('todo_item');
  let todoItemText = document.createElement('span');
  todoItemText.innerText = target.querySelector('input').value;
  todoItem.append(todoItemText);
  let deleteButtonItem = document.createElement('button');
  deleteButtonItem.innerHTML = '&#10005;';
  todoItem.append(deleteButtonItem);
  let checkboxItem = document.createElement('input');
  checkboxItem.setAttribute('type', 'checkbox');
  todoItem.prepend(checkboxItem);
  todoList.append(todoItem);
  target.querySelector('input').value = '';
});

// List event listeners (done and remove)
todoList.addEventListener('click', function(event) {
  console.log(event.target.parentElement);
  if (event.target.tagName === "INPUT") {
    event.target.parentElement.classList.toggle('crossout');
  } 
  else if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
});

