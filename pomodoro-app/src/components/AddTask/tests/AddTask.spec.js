import React, { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ModalContext } from '../../../Context/ModalContext';
import { CounterContext } from '../../../Context/CounterContext';
import { AddTask } from '..';

const mockCounterContext = {
    isCounterActive: false,
}


const mockModalContext = {
    setIsCreateTaskOpen: jest.fn(),
}

describe('<AddTask />', () => {
    it('should render AddTask component with button', () => {
        const { isCounterActive } = mockCounterContext;
        const {  setIsCreateTaskOpen } = mockModalContext;

        render(
            <CounterContext.Provider value={{isCounterActive}}>
            <ModalContext.Provider value={{setIsCreateTaskOpen}}>
                <AddTask/>
            </ModalContext.Provider>
            </CounterContext.Provider>
        );

        const addTask = document.querySelector('.add-task-wrapper');
        expect(addTask).toBeInTheDocument();
        
        const addTaskButton = screen.getByText('+ Add task');
        expect(addTaskButton).toBeInTheDocument();
    });

    it('should call setIsCreateTaskOpen with true on button click', () => {
        const { isCounterActive } = mockCounterContext;
        const { setIsCreateTaskOpen } = mockModalContext;

        render(
        <CounterContext.Provider value={{isCounterActive}}>
        <ModalContext.Provider value={{setIsCreateTaskOpen}}>
            <AddTask/>
        </ModalContext.Provider>
        </CounterContext.Provider>
        );

        const addTaskButton = screen.getByText('+ Add task');

        act(() => {
            fireEvent.click(addTaskButton);
        });

        expect(setIsCreateTaskOpen).toHaveBeenCalledWith(true);
    });
    
});
