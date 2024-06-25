import './styles.css'
import { useContext} from "react";
import { ModalContext } from '../../Context/ModalContext';
import { TasksContext } from "../../Context/TasksContext";
import closeIcon from '../../icons/x-mark.png';
import editIcon from '../../icons/edit.png';

import { editTask } from './utils/editTask';
import { removeTask } from './utils/removeTask'; 
import { useCheckLocalStorageEffect } from './hooks/useCheckLocalStorageEffect';

export const Task = () => {
    const { tasksArray, setTasksArray, setEditTaskClicked, setTaskIndex, setTaskTitle } = useContext(TasksContext);
    const { setIsCreateTaskOpen } = useContext(ModalContext);

    useCheckLocalStorageEffect( setTasksArray);

    const taskInput = document.querySelector('#create-task-input');   
    if(taskInput) taskInput.value = '';

    return (
        tasksArray.length >= 1 &&
        tasksArray.map((task, index) => (
            <div className="task-wrapper" key={index}>
                <div className="task-title-wrapper">
                    <p className="task-title">{task}</p>
                </div>
                <div className="task-options-wrapper">
                    <img src={editIcon} alt="edit-task-button"  className="edit-task-button" onClick={() => editTask(index, setEditTaskClicked, setTaskIndex, setIsCreateTaskOpen, task, setTaskTitle)}/>
                    <img src={closeIcon} alt="erase-task-button" className="erase-task-button" onClick={() => removeTask(index, tasksArray, setTasksArray, task)}/>
                </div>
            </div>
        ))
    );
}
