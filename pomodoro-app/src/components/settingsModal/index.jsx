import './styles.css'
import { useContext} from 'react';
import { ModalContext } from "../../Context/ModalContext";
import { Button } from '../Button';
import { Input } from '../Input';
import closeMenuIcon from '../../icons/x-mark.png';
import { SettingsContext } from '../../Context/SettingsContext';

import { useAddClassEffect } from './hooks/useAddClassEffect';
import { submitCounterSettings } from './utils/submitCounterSettings';

export const SettingsModal = () => {
    const { isSettingsOpen, setIsSettingsOpen } = useContext(ModalContext);
    const { setSettingsDidModified } = useContext(SettingsContext);

    useAddClassEffect(isSettingsOpen);


    return (
        <dialog open={isSettingsOpen} className='dialog' style={{ minWidth: '250px' }}>
            <header style={{ justifyContent: 'space-around'}}>
                <h3>SETTINGS</h3>
                <img src={closeMenuIcon} alt="close-button" onClick={() => setIsSettingsOpen(false)}></img>
            </header>
            <hr/>
            <form action="GET">
                <Input labelText={'Pomodoro duration: '} classNameMinutes={'pomodoro-minutes'} classNameSeconds={'pomodoro-seconds'}></Input>
                <Input labelText={'Short-break duration:'} classNameMinutes={'short-break-minutes'} classNameSeconds={'short-break-seconds'}></Input>
                <Input labelText={'Long-break  duration:'} classNameMinutes={'long-break-minutes'} classNameSeconds={'long-break-seconds'}></Input>
                <Button handleFunction={(event) => submitCounterSettings(event, setSettingsDidModified, setIsSettingsOpen )}>Enviar</Button>
            </form>
        </dialog>
    );
};
