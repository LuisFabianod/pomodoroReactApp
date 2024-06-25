import './styles.css'
import React, { useState } from "react";
import { ModalContext } from "../../Context/ModalContext";
import { CounterContext } from "../../Context/CounterContext";
import { SettingsContext } from "../../Context/SettingsContext";
import { TasksContext } from "../../Context/TasksContext";
import { Header } from '../../components/Header';
import { CounterDiv } from "../../components/CounterDiv";
import { AddTask } from "../../components/AddTask";
import { Task } from "../../components/Task";
import { ShortcutsModal } from '../../components/shortcutsModal';
import { SettingsModal } from "../../components/settingsModal";
import { CreateTaskModal } from '../../components/createTaskModal'

export const Home = () => {

    const [ settingsDidModified, setSettingsDidModified ] = useState(false)
    const [ isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [ isShortcutsOpen, setIsShortcutsOpen] = useState(false);
    const [ isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
    const [ counter, setCounter] = useState(3000);
    const [ isCounterActive, setIsCounterActive ] = useState(false);
    const [ pomodoroState, setPomodoroState ] = useState('Pomodoro');
    const [ tasksArray, setTasksArray ] = useState([]);
    const [ editTaskClicked, setEditTaskClicked ] = useState(false);
    const [ taskIndex, setTaskIndex ] = useState(0);
    const [ taskTitle, setTaskTitle ] = useState('');
    

    return(
        <>
        <SettingsContext.Provider value={{ settingsDidModified, setSettingsDidModified }}>
            <ModalContext.Provider value={{isSettingsOpen, setIsSettingsOpen, isShortcutsOpen, setIsShortcutsOpen, isCreateTaskOpen, setIsCreateTaskOpen}}>
                <Header/>
                <SettingsModal/>
                <ShortcutsModal/>
                <CounterContext.Provider value={{counter, setCounter, isCounterActive, setIsCounterActive, pomodoroState, setPomodoroState}}>
                    <CounterDiv/>
                    <TasksContext.Provider value={{tasksArray, setTasksArray,editTaskClicked, setEditTaskClicked, taskIndex, setTaskIndex, taskTitle, setTaskTitle}}>
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