export const removeTask = (index, tasksArray, setTasksArray) => {
    const newTasksArray = [
      ...tasksArray.slice(0, index),
      ...tasksArray.slice(index + 1)
    ];
    setTasksArray(newTasksArray);
  };

