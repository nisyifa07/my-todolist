const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');

function addTodoItem() {
  const task = todoInput.value;
  if (task === '') return;

  const li = document.createElement('li'); 

  const leftContainer = document.createElement('div');
  leftContainer.classList.add('left-container');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskText = document.createElement('span');
  taskText.textContent = task;

  checkbox.addEventListener('change', function () {
    taskText.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
    todoList.removeChild(li);
  });

  leftContainer.appendChild(checkbox);
  leftContainer.appendChild(taskText);

  li.appendChild(leftContainer);
  li.appendChild(deleteButton);
  todoList.appendChild(li);

  todoInput.value = '';
}

addButton.addEventListener('click', addTodoItem);
