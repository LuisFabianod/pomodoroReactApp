export const editTask = (event, setEditTaskClicked, tasksArray ,setTasksArray, setIsCreateTaskOpen, taskIndex) => {

    event.preventDefault();
    const taskInput = document.querySelector('#create-task-input');
    const taskTitle = taskInput.value;
    if(taskTitle === '') return;
    const newTasksArray = [ ...tasksArray.slice(0, taskIndex), taskTitle, ...tasksArray.slice(taskIndex + 1) ];
    setTasksArray(newTasksArray);
    setIsCreateTaskOpen(false);
    setEditTaskClicked(false);
};