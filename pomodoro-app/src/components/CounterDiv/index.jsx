import './styles.css';
import { useContext, useCallback } from 'react';
import { CounterContext } from '../../Context/CounterContext';
import { SettingsContext } from '../../Context/SettingsContext';
import { ModalContext } from '../../Context/ModalContext';
import { Button } from '../Button';
import { Counter } from '../Counter';


import { useCounterEffect } from './hooks/useCounterEffect';
import { useKeyPressEffect } from './hooks/useKeyPressEffect';
import { usePomodoroStateEffect } from './hooks/usePomodoroStateEffect';



export const CounterDiv = () => {
    const { counter, setCounter, isCounterActive, setIsCounterActive, pomodoroState, setPomodoroState } = useContext(CounterContext);
    const buttonText = isCounterActive ? 'Pause' : 'Start';

    const { settingsDidModified, setSettingsDidModified } = useContext(SettingsContext);
    const { isCreateTaskOpen } = useContext(ModalContext);

    const handleStartCounter = useCallback(() => {
        setIsCounterActive(!isCounterActive);
    }, [ setIsCounterActive ,isCounterActive]);

    useCounterEffect(isCounterActive, counter, setCounter, setIsCounterActive);
    useKeyPressEffect(handleStartCounter, isCreateTaskOpen);
    usePomodoroStateEffect(pomodoroState, setCounter, setIsCounterActive, settingsDidModified, setSettingsDidModified);

    return (
        <div className="wrapper">
            <nav>
                <Button handleFunction={() => setPomodoroState('Pomodoro')}>Pomodoro</Button>
                <Button handleFunction={() => setPomodoroState('Short-break')}>Short Break</Button>
                <Button handleFunction={() => setPomodoroState('Long-break')}>Long Break</Button>
            </nav>
            <p>{pomodoroState}</p>
            <Counter />
            <Button handleFunction={handleStartCounter}>{buttonText}</Button>
        </div>
    );
};
