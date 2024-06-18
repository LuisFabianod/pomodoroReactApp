import './styles.css'
import { Button } from '../Button'
import { Counter } from '../Counter'
import { useContext, useEffect, useState } from 'react'
import { CounterContext } from '../../Context/CounterContext/counterContext'


export const CounterDiv = () => {

    const { counter, setCounter, isCounterActive, setIsCounterActive, pomodoroState, setPomodoroState} = useContext(CounterContext);
    

    const buttonText = isCounterActive ? 'Pause' : 'Start'; 

    useEffect(() => {
        let timer;
        if( isCounterActive && counter > 0) {
            timer = setTimeout(() => {
                setCounter( counter - 1);
            }, 1000)
        }else if( counter <= 0){
            setIsCounterActive(false);
        }

        return () => clearTimeout(timer);
    }, [isCounterActive, counter, setCounter]);  

    const handleStartCounter = () => {
        setIsCounterActive(!isCounterActive);
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.key === ' ') {
            handleStartCounter()
            
          }
        };
        document.addEventListener('keypress', handleKeyPress);
    
        return () => {
          document.removeEventListener('keypress', handleKeyPress);
        };
      }, [handleStartCounter])

      useEffect(() => {
        setIsCounterActive(false);

        const body = document.querySelector('.body');
        const button = document.querySelectorAll('.button');
        const counterDiv = document.querySelector('.wrapper');

        switch(pomodoroState){
            case 'Pomodoro':
                setCounter(3000);
                body.style.background = '#BA4949';
                button.forEach(el => el.style.background = '#df7373')
                counterDiv.style.background = '#c96161';
                break;
            case 'Short-brake':
                setCounter(600);
                body.style.background = '#397097';
                button.forEach(el => el.style.background = '#618dac')
                counterDiv.style.background = '#4d7fa2';
                
                break;
            case 'Long-brake':
                setCounter(900);
                body.style.background = '#9B8238';
                button.forEach(el => el.style.background = '#af9b60')
                counterDiv.style.background = '#A58F4C';
                break;
            
        }
      }, [pomodoroState])
      
     

    return(
        <div className="wrapper">
            <nav>
                <Button handleFunction={() => {setPomodoroState('Pomodoro')}}>Pomodoro</Button>
                <Button handleFunction={() => {setPomodoroState('Short-brake')}}>Short Brake</Button>
                <Button handleFunction={() => {setPomodoroState('Long-brake')}}>Long Break</Button>
            </nav>
            <h7>{pomodoroState}</h7>
            <Counter></Counter>
            <Button handleFunction={handleStartCounter}>{buttonText}</Button>
        </div>
    )
}