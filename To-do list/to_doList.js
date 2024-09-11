// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage when the page loads
window.onload = loadTasks;

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText !== '') {
    const taskItem = createTaskElement(taskText);
    taskList.appendChild(taskItem);
    
    // Save the task to localStorage
    saveTask(taskText);
    
    // Clear the input field
    taskInput.value = '';
  }
}

// Function to create a task element (li)
function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;
  
  // Mark task as complete by clicking on it
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
    updateTaskStatus(taskText, li.classList.contains('completed'));
  });
  
  // Delete button for each task
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
    deleteTask(taskText);
  });
  
  li.appendChild(deleteBtn);
  return li;
}

// Save task to localStorage
function saveTask(taskText) {
  let tasks = getTasksFromStorage();
  tasks.push({ text: taskText, completed: false });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete task from localStorage
function deleteTask(taskText) {
  let tasks = getTasksFromStorage();
  tasks = tasks.filter(task => task.text !== taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Update task completion status in localStorage
function updateTaskStatus(taskText, isCompleted) {
  let tasks = getTasksFromStorage();
  tasks = tasks.map(task => 
    task.text === taskText ? { ...task, completed: isCompleted } : task
  );
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks from localStorage
function getTasksFromStorage() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

// Load tasks from localStorage when the page loads
function loadTasks() {
  const tasks = getTasksFromStorage();
  
  tasks.forEach(task => {
    const taskItem = createTaskElement(task.text);
    
    // Mark the task as completed if it's marked in storage
    if (task.completed) {
      taskItem.classList.add('completed');
    }
    
    taskList.appendChild(taskItem);
  });
}
