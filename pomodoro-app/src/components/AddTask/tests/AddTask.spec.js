import React, { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { AddTask } from '..';
import { ModalContext } from '../../../Context/ModalContext';


const mockModalContext = {
    setIsCreateTaskOpen: jest.fn(),
}

describe('<AddTask />', () => {
    it('should render AddTask component with button', () => {
        const {  setIsCreateTaskOpen } = mockModalContext;

        render(
        <ModalContext.Provider value={ {setIsCreateTaskOpen}}>
            <AddTask/>
        </ModalContext.Provider>
        );

        const addTask = document.querySelector('.add-task-wrapper');
        expect(addTask).toBeInTheDocument();
        
        const addTaskButton = screen.getByText('+ Add task');
        expect(addTaskButton).toBeInTheDocument();
    });

    it('should call setIsCreateTaskOpen with true on button click', () => {
        const { setIsCreateTaskOpen } = mockModalContext;

        render(
        <ModalContext.Provider value={{setIsCreateTaskOpen}}>
            <AddTask/>
        </ModalContext.Provider>
        );

        const addTaskButton = screen.getByText('+ Add task');

        act(() => {
            fireEvent.click(addTaskButton);
        });

        expect( setIsCreateTaskOpen).toHaveBeenCalledWith(true);
    });
    
});
