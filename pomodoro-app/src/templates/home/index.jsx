import React, { useState } from "react";
import './styles.css'
import { Header } from '../../components/Header';
import { ShortcutsModal } from '../../components/ShortcutsModal';
import { SettingsModal } from "../../components/settingsModal";
import { CounterDiv } from "../../components/CounterDiv";
import { ModalContext } from "../../Context/ModalContext";
import { CounterContext } from "../../Context/CounterContext";
import { SettingsContext } from "../../Context/SettingsContext";

export const Home = () => {

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
    const [counter, setCounter] = useState(3000);
    const [ isCounterActive, setIsCounterActive ] = useState(false);
    const [ pomodoroState, setPomodoroState ] = useState('Pomodoro');
    const [ settingsDidModified, setSettingsDidModified ] = useState(false)

    return(
        <>
        <SettingsContext.Provider value={{ settingsDidModified, setSettingsDidModified }}>
        <ModalContext.Provider value={{isSettingsOpen, setIsSettingsOpen, isShortcutsOpen, setIsShortcutsOpen}}>
        <Header/>
        <SettingsModal/>
        <ShortcutsModal/>
        

        <CounterContext.Provider value={{counter, setCounter, isCounterActive, setIsCounterActive, pomodoroState, setPomodoroState}}>
        <CounterDiv/>
       
        </CounterContext.Provider>
        </ModalContext.Provider>
        </SettingsContext.Provider>
        
        </>

    )
}