import React, { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { CounterDiv } from '..';
import { Input } from '../../Input';
import { CounterContext } from '../../../Context/CounterContext';
import { SettingsContext } from '../../../Context/SettingsContext';
import { ModalContext } from '../../../Context/ModalContext';

const mockCounterContext = {
    counter: 3000,
    setCounter: jest.fn(),
    isCounterActive: false,
    setIsCounterActive: jest.fn(),
    pomodoroState: 'Pomodoro',
    setPomodoroState: jest.fn(),
};

const mockSettingsContext = {
    settingsDidModified: false,
};

const mockModalContext = {
    isSettingsOpen: false,
};

const renderComponent = () => {

    const { isSettingsOpen } = mockModalContext;
    const { settingsDidModified } = mockSettingsContext;
    const { counter, setCounter, isCounterActive, setIsCounterActive, pomodoroState, setPomodoroState } = mockCounterContext;
    
    render(
        <SettingsContext.Provider value={{ settingsDidModified }}>
            <ModalContext.Provider value={{ isSettingsOpen }}>
                <CounterContext.Provider value={{ counter, setCounter, isCounterActive, setIsCounterActive, pomodoroState, setPomodoroState }}>
                    <Input labelText={'Pomodoro duration: '} classNameMinutes={'pomodoro-minutes'} classNameSeconds={'pomodoro-seconds'} />
                    <Input labelText={'Short-break duration:'} classNameMinutes={'short-break-minutes'} classNameSeconds={'short-break-seconds'} />
                    <Input labelText={'Long-break  duration:'} classNameMinutes={'long-break-minutes'} classNameSeconds={'long-break-seconds'} />
                    <CounterDiv />
                </CounterContext.Provider>
            </ModalContext.Provider>
        </SettingsContext.Provider>
    );
}

describe('<CounterDiv />', () => {

    const { isSettingsOpen } = mockModalContext;
    const { settingsDidModified } = mockSettingsContext;
    const { counter, setCounter, isCounterActive, setIsCounterActive, pomodoroState, setPomodoroState } = mockCounterContext;

    it('should render CounterDiv component with buttons', () => {
        renderComponent();

        const counterDiv = document.querySelector('.wrapper');
        expect(counterDiv).toBeInTheDocument();

        const pomodoroButton = screen.getByRole('button', {name: 'Pomodoro'});
        expect(pomodoroButton).toBeInTheDocument();

        const shortBreakButton = screen.getByRole('button', {name: 'Short Break'});
        expect(shortBreakButton).toBeInTheDocument();

        const longBreakButton = screen.getByRole('button', {name: 'Long Break'});
        expect(longBreakButton).toBeInTheDocument();

        const startButton = screen.getByRole('button', {name: 'Start'});
        expect(startButton).toBeInTheDocument();
    });


    it('should call setPomodoroState with Pomodoro on pomodoroButton click', () => {
        renderComponent();

        const pomodoroButton = screen.getByRole('button', {name: 'Pomodoro'});

        act(() => {
            fireEvent.click(pomodoroButton);
        });
        expect(setPomodoroState).toHaveBeenCalledWith('Pomodoro');
    });

    it('should call setPomodoroState with Short-break on shortBreakButton click', () => {
        renderComponent();

        const shortBreakButton = screen.getByRole('button', {name: 'Short Break'});

        act(() => {
            fireEvent.click(shortBreakButton);
        });
        expect(setPomodoroState).toHaveBeenCalledWith('Short-break');
    });

    it('should call setPomodoroState with Long-break on longBreakButton click', () => {
        renderComponent();

        const longBreakButton = screen.getByRole('button', {name: 'Long Break'});

        act(() => {
            fireEvent.click(longBreakButton);
        });
        expect(setPomodoroState).toHaveBeenCalledWith('Long-break');
    });

    it('should call setIsCounterActive with true on startButton click', () => {
        renderComponent();

        const startButton = screen.getByRole('button', {name: 'Start'});

        act(() => {
            fireEvent.click(startButton);
        });

        expect(setIsCounterActive).toHaveBeenCalledWith(true);
    });

});
