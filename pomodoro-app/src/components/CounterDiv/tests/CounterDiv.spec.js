import React from 'react';
import { render } from '@testing-library/react';
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

describe('<CounterDiv />', () => {

    it('should render CounterDiv component', () => {
        render(
            <SettingsContext.Provider value={mockSettingsContext}>
                <ModalContext.Provider value={mockModalContext}>
                    <CounterContext.Provider value={mockCounterContext}>
                        <Input labelText={'Pomodoro duration: '} classNameMinutes={'pomodoro-minutes'} classNameSeconds={'pomodoro-seconds'} />
                        <Input labelText={'Short-break duration:'} classNameMinutes={'short-break-minutes'} classNameSeconds={'short-break-seconds'} />
                        <Input labelText={'Long-break  duration:'} classNameMinutes={'long-break-minutes'} classNameSeconds={'long-break-seconds'} />
                        <CounterDiv />
                    </CounterContext.Provider>
                </ModalContext.Provider>
            </SettingsContext.Provider>
        );

        const counterDiv = document.querySelector('.wrapper');
        expect(counterDiv).toBeInTheDocument();
    });

});
