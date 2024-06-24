import { createTask } from "./createTask";
import { editTask } from "./editTask";

export const createOrEditTask = (event, editTaskClicked, setEditTaskClicked, tasksArray ,setTasksArray, setIsCreateTaskOpen, taskIndex) => {
    if(editTaskClicked){
        editTask(event, setEditTaskClicked, tasksArray ,setTasksArray, setIsCreateTaskOpen, taskIndex);
        return;
    }else{
        createTask(event, tasksArray, setTasksArray, setIsCreateTaskOpen)
    }
}