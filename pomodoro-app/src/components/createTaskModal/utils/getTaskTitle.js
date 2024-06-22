export const getTaskTitle = (event, tasksArray, setTasksArray, setIsCreateTaskOpen) => {

    event.preventDefault();
    const taskInput = document.querySelector('#create-task-input');
    const taskTitle = taskInput.value;
    if(taskTitle === '') return;
    setTasksArray([...tasksArray, taskTitle ]);
    setIsCreateTaskOpen(false);
};
