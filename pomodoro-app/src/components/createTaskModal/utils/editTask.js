export const editTask = (event, setEditTaskClicked, tasksArray ,setTasksArray, setIsCreateTaskOpen, taskIndex, taskTitle, setTaskTitle) => {
    
    event.preventDefault();
    const taskInput = document.querySelector('#create-task-input');
    const taskInputValue = taskInput.value;
    if(taskInputValue === '') return;
    setTaskTitle(taskInputValue)
    const newTasksArray = [ ...tasksArray.slice(0, taskIndex), taskInputValue, ...tasksArray.slice(taskIndex + 1) ];
    setTasksArray(newTasksArray);
    setIsCreateTaskOpen(false);

    localStorage.removeItem(`Task${taskTitle}`);
    localStorage.setItem(`Task${taskInputValue}`, taskInputValue)

    setEditTaskClicked(false);
};