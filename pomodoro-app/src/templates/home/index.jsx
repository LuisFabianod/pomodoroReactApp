import React, { useState } from "react";
import './styles.css'
import { Header } from '../../components/Header';
import { ShortcutsModal } from '../../components/shortcutsModal';
import { SettingsModal } from '../../components/settingsModal';
import { CounterDiv } from "../../components/CounterDiv";
import { ModalContext } from "../../Context/ModalContext";
import { CounterContext } from "../../Context/CounterContext";

export const Home = () => {

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
    const [counter, setCounter] = useState(3000);
    const [ isCounterActive, setIsCounterActive ] = useState(false);
    const [ pomodoroState, setPomodoroState ] = useState('Pomodoro');

    return(
        <>
        <ModalContext.Provider value={{isSettingsOpen, setIsSettingsOpen, isShortcutsOpen, setIsShortcutsOpen}}>
        <Header/>
        <SettingsModal/>
        <ShortcutsModal/>
        </ModalContext.Provider>

        <CounterContext.Provider value={{counter, setCounter, isCounterActive, setIsCounterActive, pomodoroState, setPomodoroState}}>
        <CounterDiv/>
        </CounterContext.Provider>
        </>

    )
}