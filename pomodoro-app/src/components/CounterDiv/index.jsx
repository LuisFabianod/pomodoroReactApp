import './styles.css';
import { Button } from '../Button';
import { Counter } from '../Counter';
import { useContext, useEffect, useCallback } from 'react';
import { CounterContext } from '../../Context/CounterContext/counterContext';

const playAudio = (audioPath) => {
    const audio = new Audio(require(audioPath));
    if (audio) {
        audio.play();
    }
};

const useCounterEffect = (isCounterActive, counter, setCounter, setIsCounterActive) => {
    useEffect(() => {
        let timer;
        if (isCounterActive && counter > 0) {
            timer = setTimeout(() => setCounter(counter - 1), 1000);
        } else if (counter <= 0) {
            playAudio('../../audios/announcement.mp3');
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

const usePomodoroStateEffect = (pomodoroState, setCounter, setIsCounterActive) => {
    useEffect(() => {
        setIsCounterActive(false);
        const body = document.querySelector('.body');
        const buttons = document.querySelectorAll('.button');
        const counterDiv = document.querySelector('.wrapper');
        
        const styles = {
            'Pomodoro': { counter: 3000, body: '#BA4949', button: '#df7373', counterDiv: '#c96161' },
            'Short-breake': { counter: 600, body: '#397097', button: '#618dac', counterDiv: '#4d7fa2' },
            'Long-breake': { counter: 900, body: '#9B8238', button: '#af9b60', counterDiv: '#A58F4C' },
        };
        
        const { counter, body: bodyColor, button: buttonColor, counterDiv: counterDivColor } = styles[pomodoroState] || {};
        
        setCounter(counter);
        body.style.background = bodyColor;
        buttons.forEach(el => el.style.background = buttonColor);
        counterDiv.style.background = counterDivColor;
    }, [pomodoroState, setCounter, setIsCounterActive]);
};

export const CounterDiv = () => {
    const { counter, setCounter, isCounterActive, setIsCounterActive, pomodoroState, setPomodoroState } = useContext(CounterContext);
    const buttonText = isCounterActive ? 'Pause' : 'Start';

    const handleStartCounter = useCallback(() => {
        setIsCounterActive(prev => !prev);
    }, [setIsCounterActive]);

    useCounterEffect(isCounterActive, counter, setCounter, setIsCounterActive);
    useKeyPressEffect(handleStartCounter);
    usePomodoroStateEffect(pomodoroState, setCounter, setIsCounterActive);

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
