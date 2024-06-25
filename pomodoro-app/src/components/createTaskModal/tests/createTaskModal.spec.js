import React, { act } from 'react';
import { fireEvent, getByAltText, render, screen } from '@testing-library/react';
import { CreateTaskModal } from '..';
import { TasksContext } from '../../../Context/TasksContext';
import { ModalContext } from '../../../Context/ModalContext';
import { createOrEditTask } from '../utils/createOrEditTask';

const mockModalContext = {
    isCreateTaskOpen: false, 
    setIsCreateTaskOpen: jest.fn()
}

const mockTasksContext = {
    tasksArray: [] ,
    setTasksArray: jest.fn(), 
    editTaskClicked: false, 
    setEditTaskClicked: jest.fn(), 
    taskIndex: null
}

jest.mock('../utils/createOrEditTask', () => ({
    createOrEditTask: jest.fn()
}))

const renderComponent = () => {

    const { isCreateTaskOpen, setIsCreateTaskOpen } = mockModalContext;

    const { tasksArray, setTasksArray, editTaskClicked,  setEditTaskClicked, taskIndex } = mockTasksContext;
    
    render(
        <ModalContext.Provider value={{ isCreateTaskOpen, setIsCreateTaskOpen }}>
            <TasksContext.Provider value={{ tasksArray, setTasksArray, editTaskClicked,  setEditTaskClicked, taskIndex}}>
            <CreateTaskModal />
            </TasksContext.Provider>             
        </ModalContext.Provider>
    );
}


describe('<createTaskModal />', () => {

    const { isCreateTaskOpen, setIsCreateTaskOpen } = mockModalContext;

    const { tasksArray, setTasksArray, editTaskClicked,  setEditTaskClicked, taskIndex } = mockTasksContext;
    
    it('should render createTask component', () => {
       renderComponent();

       const createTaskComponent = document.querySelector('#create-task-dialog');
       expect(createTaskComponent).toBeInTheDocument();

       const title = screen.getByText('Create new task');
       expect(title).toBeInTheDocument();

       const closeIcon = screen.getByAltText('close-button');
       expect(closeIcon).toBeInTheDocument();

       const taskInput = screen.getByPlaceholderText('Write your task here');
       expect(taskInput).toBeInTheDocument();

       const button = document.querySelector('.button');
       expect(button).toBeInTheDocument();

    });

    it('should call setIsCreateTaskOpen with false on close icon click', () => {
        renderComponent();
        
        const closeIcon = screen.getByAltText('close-button');
        act(() => {
            fireEvent.click(closeIcon);
        });

        expect(setIsCreateTaskOpen).toHaveBeenCalledWith(false);
 
     });

     it('should call createOrEditTask on button click', () => {
        renderComponent();

        const button = document.querySelector('.button');
        act(() => {
            fireEvent.click(button);
        });

        expect(createOrEditTask).toHaveBeenCalledTimes(1);

    });
    
});
