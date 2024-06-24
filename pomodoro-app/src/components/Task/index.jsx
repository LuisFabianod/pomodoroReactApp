import './styles.css'
import { useContext} from "react";
import { TasksContext } from "../../Context/TasksContext";
import closeIcon from '../../icons/x-mark.png';
import editIcon from '../../icons/edit.png';

import { editTask } from './utils/editTask';
import { removeTask } from './utils/removeTask'; 
import { ModalContext } from '../../Context/ModalContext';

export const Task = () => {
    const { tasksArray, setTasksArray, setEditTaskClicked, setTaskIndex } = useContext(TasksContext);
    const { setIsCreateTaskOpen } = useContext(ModalContext);
    
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
                    <img src={editIcon} alt="edit-task-button"  className="edit-task-button" onClick={() => editTask(index, setEditTaskClicked, setTaskIndex, setIsCreateTaskOpen)}/>
                    <img src={closeIcon} alt="erase-task-button" className="erase-task-button" onClick={() => removeTask(index, tasksArray, setTasksArray)}/>
                </div>
            </div>
        ))
    );
}
