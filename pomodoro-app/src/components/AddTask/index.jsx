import './styles.css'
import { useContext } from 'react';
import { Button } from "../Button";
import { ModalContext } from '../../Context/ModalContext';

export const AddTask = () => {
    const { setIsCreateTaskOpen } = useContext(ModalContext);
    return(
        <div className="add-task-wrapper">
            <Button id={'add-task-button'} handleFunction={() => setIsCreateTaskOpen(true)}>+ Add task</Button>
        </div>
    )
};