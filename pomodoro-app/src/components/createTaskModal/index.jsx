import './styles.css';
import { useContext } from 'react';
import { ModalContext } from '../../Context/ModalContext';
import closeMenuIcon from '../../icons/x-mark.png'
import { Button } from '../Button';
import { useAddClassEffect } from './hooks/useAddClassEffect';
import { TasksContext } from '../../Context/TasksContext';

export const CreateTaskModal = () => {
    const {  tasksArray ,setTasksArray } = useContext(TasksContext);

    const getTaskTitle = (event) => {
        event.preventDefault();
        const taskInput = document.querySelector('#create-task-input');
        const taskTitle = taskInput.value;
        setTasksArray([...tasksArray, taskTitle ]);
    };

    const { isCreateTaskOpen, setIsCreateTaskOpen } = useContext(ModalContext);

    useAddClassEffect(isCreateTaskOpen);

    return(
        <dialog open={isCreateTaskOpen} id='create-task-dialog' className='dialog' style={{ minWidth: '400px', maxHeight: '300px'}}>
            <header>
                <h3>Create new task</h3>
                <img src={closeMenuIcon} alt="close-button" onClick={() => setIsCreateTaskOpen(false)}></img>
            </header>
            <form id='create-task-form'>
                <input type="text" id='create-task-input' placeholder='Write your task here' />
                <Button handleFunction={(event) => getTaskTitle(event)}>Add task</Button>
            </form>
        </dialog>
    )
}