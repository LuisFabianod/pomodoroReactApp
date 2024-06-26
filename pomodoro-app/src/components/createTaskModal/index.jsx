import './styles.css';
import { useContext } from 'react';
import { ModalContext } from '../../Context/ModalContext';
import { TasksContext } from '../../Context/TasksContext';
import { Button } from '../Button';
import closeMenuIcon from '../../icons/x-mark.png'

import { useAddClassEffect } from './hooks/useAddClassEffect';
import { useKeyPressEffect } from './hooks/useKeyPressEffect';
import { createOrEditTask } from './utils/createOrEditTask';
import { useInputFocusEffect } from './hooks/useInputFocusEffect';

export const CreateTaskModal = () => {

    const {  tasksArray, setTasksArray,editTaskClicked, setEditTaskClicked, taskIndex, taskTitle, setTaskTitle } = useContext(TasksContext);
    const { isCreateTaskOpen, setIsCreateTaskOpen } = useContext(ModalContext);

    useAddClassEffect(isCreateTaskOpen);
    useInputFocusEffect(isCreateTaskOpen);
    useKeyPressEffect(setIsCreateTaskOpen, 'n', true);
    
    return(
        <dialog open={isCreateTaskOpen} id='create-task-dialog' className='dialog'>
            <header>
                <h3>Create new task</h3>
                <img src={closeMenuIcon} alt="close-button" onClick={() => setIsCreateTaskOpen(false)}></img>
            </header>
            <form id='create-task-form'>
                <input type="text" id='create-task-input' placeholder='Write your task here'/>
                <Button handleFunction={(event) => createOrEditTask(event, editTaskClicked, setEditTaskClicked, tasksArray ,setTasksArray, setIsCreateTaskOpen, taskIndex, taskTitle, setTaskTitle )}>Add task</Button>
            </form>
        </dialog>
    )
}