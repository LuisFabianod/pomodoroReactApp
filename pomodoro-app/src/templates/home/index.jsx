import React, { useState } from "react";
import './styles.css'
import { Header } from '../../components/Header';
import { ShortcutsModal } from '../../components/shortcutsModal';
import { SettingsModal } from "../../components/settingsModal";
import { CreateTaskModal } from '../../components/createTaskModal'
import { CounterDiv } from "../../components/CounterDiv";
import { AddTask } from "../../components/AddTask";
import { Task } from "../../components/Task";
import { ModalContext } from "../../Context/ModalContext";
import { CounterContext } from "../../Context/CounterContext";
import { SettingsContext } from "../../Context/SettingsContext";
import { TasksContext } from "../../Context/TasksContext";


export const Home = () => {

    const [ settingsDidModified, setSettingsDidModified ] = useState(false)
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
    const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
    const [counter, setCounter] = useState(3000);
    const [ isCounterActive, setIsCounterActive ] = useState(false);
    const [ pomodoroState, setPomodoroState ] = useState('Pomodoro');
    const [ tasksArray, setTasksArray ] = useState([]);
    

    return(
        <>
        <SettingsContext.Provider value={{ settingsDidModified, setSettingsDidModified }}>
        <ModalContext.Provider value={{isSettingsOpen, setIsSettingsOpen, isShortcutsOpen, setIsShortcutsOpen, isCreateTaskOpen, setIsCreateTaskOpen}}>
        <Header/>
        <SettingsModal/>
        <ShortcutsModal/>

        <CounterContext.Provider value={{counter, setCounter, isCounterActive, setIsCounterActive, pomodoroState, setPomodoroState}}>
        <CounterDiv/>
        <TasksContext.Provider value={{tasksArray, setTasksArray}}>
        <CreateTaskModal/>
        <AddTask />
        <Task />
        </TasksContext.Provider>
        </CounterContext.Provider>
        </ModalContext.Provider>
        </SettingsContext.Provider>
        
        </>

    )
}