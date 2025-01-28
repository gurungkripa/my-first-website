const ul = document.querySelector('ul');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');

// Function to add a new task
function addTask(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;

  // Add a "completed" toggle
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Add a delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.addEventListener('click', () => {
    ul.removeChild(li);
  });

  li.appendChild(deleteBtn);
  ul.appendChild(li);
}

// Add task on button click
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    taskInput.value = ''; // Clear input field
  }
});
