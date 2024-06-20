import './styles.css';
import { Button } from '../Button';
import { Counter } from '../Counter';
import { useContext, useEffect, useCallback } from 'react';
import { CounterContext } from '../../Context/CounterContext';
import { SettingsContext } from '../../Context/SettingsContext';
import { ModalContext } from '../../Context/ModalContext';

const playAudio = () => {
    const audio = new Audio(require('../../audios/announcement.mp3'));
    if (audio) {
        audio.play();
    }
};

const formatInput = (inputMinutesClass, inputSecondsClass, input) => {
    const inputMinutes = document.querySelector(`.${inputMinutesClass}`);
    const inputSeconds = document.querySelector(`.${inputSecondsClass}`);

    const minutes = parseInt(inputMinutes.value) || 0;
    const seconds = parseInt(inputSeconds.value) || 0;

    if (minutes <= 0 && seconds <= 0) {
        const newCounter = 3000;
        return newCounter;
    }

    const newCounter = minutes * 60 + seconds;

    localStorage.setItem(`${input}Counter`, newCounter);

    return newCounter;

}


const useCounterEffect = (isCounterActive, counter, setCounter, setIsCounterActive) => {
    useEffect(() => {
        let timer;
        if (isCounterActive && counter > 0) {
            timer = setTimeout(() => setCounter(counter - 1), 1000);
        } else if (counter <= 0) {
            playAudio();
            setIsCounterActive(false);
        }
        return () => clearTimeout(timer);
    }, [isCounterActive, counter, setCounter, setIsCounterActive]);
};

const useKeyPressEffect = (handleStartCounter) => {
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === ' ') {
                handleStartCounter();
            }
        };
        document.addEventListener('keypress', handleKeyPress);
        return () => document.removeEventListener('keypress', handleKeyPress);
    }, [handleStartCounter]);
};

const usePomodoroStateEffect = (pomodoroState, setCounter, setIsCounterActive, settingsDidModified, isSettingsOpen) => {
    console.log(localStorage)
    useEffect(() => {
        setIsCounterActive(false);
        const body = document.querySelector('body');
        const buttons = document.querySelectorAll('.button');
        const counterDiv = document.querySelector('.wrapper');

        
        const initialStyles = {
            'Pomodoro': { counter: parseInt(localStorage.getItem("pomodoroCounter")) || 3000, body: '#BA4949', button: '#df7373', counterDiv: '#c96161' },
            'Short-breake': { counter: parseInt(localStorage.getItem("shortBreakCounter")) || 600, body: '#397097', button: '#618dac', counterDiv: '#4d7fa2' },
            'Long-breake': { counter: parseInt(localStorage.getItem("longBreakCounter")) || 900, body: '#9B8238', button: '#af9b60', counterDiv: '#A58F4C' },
        };

        const userSettingsStyles = {
            'Pomodoro': { counter: formatInput('pomodoro-minutes', 'pomodoro-seconds', 'pomodoro'), body: '#BA4949', button: '#df7373', counterDiv: '#c96161' },
            'Short-breake': { counter: formatInput('short-break-minutes', 'short-break-seconds', 'shortBreak'), body: '#397097', button: '#618dac', counterDiv: '#4d7fa2' },
            'Long-breake': { counter: formatInput('long-break-minutes', 'long-break-seconds', 'longBreak'), body: '#9B8238', button: '#af9b60', counterDiv: '#A58F4C' },
        };


        const styles = settingsDidModified ? userSettingsStyles : initialStyles;

        const { counter, body: bodyColor, button: buttonColor, counterDiv: counterDivColor } = styles[pomodoroState] || {};
        
        setCounter(counter);
        body.style.background = bodyColor;
        buttons.forEach(el => el.style.background = buttonColor);
        counterDiv.style.background = counterDivColor;
    }, [pomodoroState, setCounter, setIsCounterActive, settingsDidModified, isSettingsOpen]);
};

export const CounterDiv = () => {
    const { counter, setCounter, isCounterActive, setIsCounterActive, pomodoroState, setPomodoroState } = useContext(CounterContext);
    const buttonText = isCounterActive ? 'Pause' : 'Start';

    const { settingsDidModified } = useContext(SettingsContext);
    const { isSettingsOpen } = useContext(ModalContext)
    

    const handleStartCounter = useCallback(() => {
        setIsCounterActive(prev => !prev);
    }, [setIsCounterActive]);

    useCounterEffect(isCounterActive, counter, setCounter, setIsCounterActive);
    useKeyPressEffect(handleStartCounter);
    usePomodoroStateEffect(pomodoroState, setCounter, setIsCounterActive, settingsDidModified, isSettingsOpen);

    return (
        <div className="wrapper">
            <nav>
                <Button handleFunction={() => setPomodoroState('Pomodoro')}>Pomodoro</Button>
                <Button handleFunction={() => setPomodoroState('Short-breake')}>Short Break</Button>
                <Button handleFunction={() => setPomodoroState('Long-breake')}>Long Break</Button>
            </nav>
            <p>{pomodoroState}</p>
            <Counter />
            <Button handleFunction={handleStartCounter}>{buttonText}</Button>
        </div>
    );
};
