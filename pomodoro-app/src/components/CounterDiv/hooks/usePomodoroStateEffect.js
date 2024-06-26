import { useEffect } from "react";
import { formatInput } from '../utils/formatInput';

export const usePomodoroStateEffect = (pomodoroState, setCounter, setIsCounterActive, settingsDidModified, setSettingsDidModified,) => {
    useEffect(() => {
        setIsCounterActive(false);
        const body = document.querySelector('body');
        const buttons = document.querySelectorAll('.button');
        const counterDiv = document.querySelector('.wrapper');

        
        const initialStyles = {
            'Pomodoro': { counter: parseInt(localStorage.getItem("pomodoroCounter")) || 3000, body: '#BA4949', button: '#df7373', counterDiv: '#c96161' },
            'Short-break': { counter: parseInt(localStorage.getItem("shortBreakCounter")) || 600, body: '#397097', button: '#618dac', counterDiv: '#4d7fa2' },
            'Long-break': { counter: parseInt(localStorage.getItem("longBreakCounter")) || 900, body: '#9B8238', button: '#af9b60', counterDiv: '#A58F4C' },
        };

        const userSettingsStyles = {
            'Pomodoro': { counter: formatInput('pomodoro-minutes', 'pomodoro-seconds', 'pomodoro', 3000), body: '#BA4949', button: '#df7373', counterDiv: '#c96161' },
            'Short-break': { counter: formatInput('short-break-minutes', 'short-break-seconds', 'shortBreak', 600), body: '#397097', button: '#618dac', counterDiv: '#4d7fa2' },
            'Long-break': { counter: formatInput('long-break-minutes', 'long-break-seconds', 'longBreak', 900), body: '#9B8238', button: '#af9b60', counterDiv: '#A58F4C' },
        };


        const styles = settingsDidModified ? userSettingsStyles : initialStyles;

        const { counter, body: bodyColor, button: buttonColor, counterDiv: counterDivColor } = styles[pomodoroState] || {};
        
        setCounter(counter);
        body.style.background = bodyColor;
        buttons.forEach(el => el.style.background = buttonColor);
        counterDiv.style.background = counterDivColor;
       


        setSettingsDidModified(false);

    }, [pomodoroState, setCounter, setIsCounterActive, settingsDidModified, setSettingsDidModified]);
};