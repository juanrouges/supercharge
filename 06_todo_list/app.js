"use strict";

console.log('Connected ...');

// Elements
const addItemForm = document.querySelector('#addItemForm');
const todoList = document.querySelector('#todoList');

// let array = [
//   {
//     completed: false,
//     task: 'Lorem ipsum dirono'
//   },
//   {
//     completed: true,
//     task: 'Romulo de la casarena ilinois'
//   }
// ];

// localStorage.setItem('todo', JSON.stringify(array));

let todo = JSON.parse(localStorage.getItem('todo')) || [];
console.log(todo.length);

function uid() {
  let a = new Uint32Array(3);
  window.crypto.getRandomValues(a);
  return (performance.now().toString(36)+Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g,"");
};

// let test 

console.log(uid());

if (todo.length > 0) {
  console.log(todo);

  for (const index of todo) {
    console.log(index.task);

    let todoItem = document.createElement('li');
    todoItem.classList.add('todo_item');
    let todoItemText = document.createElement('span');
    todoItemText.innerText = index.task;
    todoItem.append(todoItemText);
    let deleteButtonItem = document.createElement('button');
    deleteButtonItem.innerHTML = '&#10005;';
    todoItem.append(deleteButtonItem);
    let checkboxItem = document.createElement('input');
    checkboxItem.setAttribute('type', 'checkbox');
    todoItem.prepend(checkboxItem);
    todoList.append(todoItem);
  }
}

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

  let omega = {completed: false, task: todoItemText.innerText};

  todo.push(omega);
  
  localStorage.setItem('todo', JSON.stringify(todo));
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

