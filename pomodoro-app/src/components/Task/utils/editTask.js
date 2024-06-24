export const editTask = (index, setEditTask, setTaskIndex, setIsCreateTaskOpen) => {
    setIsCreateTaskOpen(true);
    setTaskIndex(index);
    setEditTask(true);
}