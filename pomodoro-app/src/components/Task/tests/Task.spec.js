import React, { act } from 'react';
import { fireEvent, getByAltText, render, screen } from '@testing-library/react';
import { Task } from '..';
import { TasksContext } from '../../../Context/TasksContext';
import { ModalContext } from '../../../Context/ModalContext';

import { editTask } from '../utils/editTask';
import { removeTask } from '../utils/removeTask';

const mockModalContext = {
    setIsCreateTaskOpen: jest.fn()
}

const mockTasksContext = {
    tasksArray: [ 'mockTask '] ,
    setTasksArray: jest.fn(), 
    setEditTaskClicked: jest.fn(), 
    setTaskIndex: jest.fn()  
}

jest.mock('../utils/editTask', () => ({
    editTask: jest.fn()
}))

jest.mock('../utils/removeTask', () => ({
    removeTask: jest.fn()
}))

const renderComponent = () => {

    const { setIsCreateTaskOpen } = mockModalContext;

    const { tasksArray, setTasksArray, setEditTaskClicked, setTaskIndex  } = mockTasksContext;
    
    render(
        <ModalContext.Provider value={{ setIsCreateTaskOpen }}>
            <TasksContext.Provider value={{  tasksArray, setTasksArray, setEditTaskClicked, setTaskIndex}}>
            <Task />
            </TasksContext.Provider>             
        </ModalContext.Provider>
    );
}


describe('<Task />', () => {
    
    it('should render Task component', () => {
       renderComponent();
        
       const taskDiv = document.querySelector('.task-wrapper');
       expect(taskDiv).toBeInTheDocument();

       const taskTitle = screen.getByText('mockTask');
       expect(taskTitle).toBeInTheDocument();

       const editIcon = screen.getByAltText('edit-task-button');
       expect(editIcon).toBeInTheDocument();

       const closeIcon = screen.getByAltText('erase-task-button');
       expect(closeIcon).toBeInTheDocument();
    });

    it('should call editTask on button click', () => {
        renderComponent();

        const editIcon = screen.getByAltText('edit-task-button');

        act(() => {
            fireEvent.click(editIcon);
        });

        expect(editTask).toHaveBeenCalledTimes(1);
    });

    it('should call removeTask on button click', () => {
        renderComponent();

        const closeIcon = screen.getByAltText('erase-task-button');

        act(() => {
            fireEvent.click(closeIcon);
        });

        expect(removeTask).toHaveBeenCalledTimes(1);
    });
    
});
