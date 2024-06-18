import React, { useState } from "react";
import './styles.css'
import { Header } from '../../components/Header';
import { Dialog } from '../../components/Dialog';
import { CounterDiv } from "../../components/CounterDiv";
import { ModalContext } from "../../Context/ModalContext/modalContext";
import { CounterContext } from "../../Context/CounterContext/counterContext";



export const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [counter, setCounter] = useState(3000);
    const [ isCounterActive, setIsCounterActive ] = useState(false);
    const [ pomodoroState, setPomodoroState ] = useState('Pomodoro')

    return(
        <>
        <ModalContext.Provider value={{isOpen, setIsOpen}}>
        <Header/>
        <Dialog/>
        </ModalContext.Provider>

        <CounterContext.Provider value={{counter, setCounter, isCounterActive, setIsCounterActive, pomodoroState, setPomodoroState}}>
        <CounterDiv/>
        </CounterContext.Provider>
        </>

    )
}