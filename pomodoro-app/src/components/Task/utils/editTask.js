export const editTask = (index, setEditTaskClicked, setTaskIndex, setIsCreateTaskOpen, taskTitle, setTaskTitle) => {
    setIsCreateTaskOpen(true);
    setTaskIndex(index);
    setTaskTitle(taskTitle);
    setEditTaskClicked(true);
}