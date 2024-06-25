export const removeTask = (index, tasksArray, setTasksArray, taskTitle) => {
    const newTasksArray = [
      ...tasksArray.slice(0, index),
      ...tasksArray.slice(index + 1)
    ];
    setTasksArray(newTasksArray);
    localStorage.removeItem(`Task${taskTitle}`)
    console.log(localStorage)
  };

