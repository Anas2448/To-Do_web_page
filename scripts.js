document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('new-task');
    const task = taskInput.value.trim();

    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});

function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.onclick = () => deleteTask(li);

    li.appendChild(deleteButton);

    document.getElementById('todo-list').appendChild(li);
}

function deleteTask(taskElement) {
    document.getElementById('todo-list').removeChild(taskElement);
}