import './styles.css'
import { useContext } from 'react';
import { ModalContext } from '../../Context/ModalContext';
import { Button } from "../Button";
import { CounterContext } from '../../Context/CounterContext';

import { openCreateTaskModal } from './utils/openCreateTaskModal';

export const AddTask = () => {

    const { isCounterActive } = useContext(CounterContext);

    const { setIsCreateTaskOpen } = useContext(ModalContext);

    if(isCounterActive){
        return(
            <div className="add-task-wrapper" style={{display: 'none'}}>
                <Button id={'add-task-button'} handleFunction={() => openCreateTaskModal(isCounterActive, setIsCreateTaskOpen)}>+ Add task</Button>
            </div>
        )
    }

    return(
        <div className="add-task-wrapper">
            <Button id={'add-task-button'} handleFunction={() => openCreateTaskModal(isCounterActive, setIsCreateTaskOpen)}>+ Add task</Button>
        </div>
    )
};