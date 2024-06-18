import './styles.css'
import { Button } from '../Button'
import { Counter } from '../Counter'
import { useContext, useEffect } from 'react'
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
        const body = document.querySelector('.body')
        switch(pomodoroState){
            case 'pomodoro':
                setCounter(3000);
                body.style.background = '#BA4949';
                break;
            case 'short-brake':
                setCounter(600);
                body.style.background = '#38858A';
                break;
            case 'long-brake':
                setCounter(900);
                body.style.background = 'yellow';
                break;
            
        }
      }, [pomodoroState])
      
     

    return(
        <div className="wrapper">
            <nav>
                <Button handleFunction={() => {setPomodoroState('pomodoro')}}>Pomodoro</Button>
                <Button handleFunction={() => {setPomodoroState('short-brake')}}>Short Brake</Button>
                <Button handleFunction={() => {setPomodoroState('long-brake')}}>Long Break</Button>
            </nav>
            <Counter></Counter>
            <Button handleFunction={handleStartCounter}>{buttonText}</Button>
        </div>
    )
}