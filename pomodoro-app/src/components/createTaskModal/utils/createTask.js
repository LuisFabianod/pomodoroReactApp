export const createTask = (event, tasksArray, setTasksArray, setIsCreateTaskOpen, setTaskTitle) => {
    event.preventDefault();
    const taskInput = document.querySelector('#create-task-input');
    const taskInputValue = taskInput.value;
    if (taskInputValue === '') return;
    setTaskTitle(taskInputValue);
    setTasksArray([...tasksArray, taskInputValue]);
    
    localStorage.setItem(`Task${taskInputValue}`, taskInputValue);

    setIsCreateTaskOpen(false);
    console.log(localStorage)
};
