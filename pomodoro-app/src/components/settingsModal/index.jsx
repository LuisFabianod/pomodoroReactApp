import { useContext, useEffect } from 'react';
import { ModalContext } from "../../Context/ModalContext";
import { Button } from '../Button';
import './styles.css'
import myImage from '../../icons/x-mark.png';
import { SettingsContext } from '../../Context/SettingsContext';

const useAddClassEffect = (isOpen) => {
    useEffect(() => {
        const body = document.querySelector('body');
        if(isOpen){ 
            body.classList.add('modal-open');
        }else{
            body.classList.remove('modal-open');
        }
    }, [isOpen]);
};

const submitCounterSettings = (event, setSettingsDidModified, setIsSettingsOpen ) => {
    event.preventDefault();
    setSettingsDidModified(true);
    setIsSettingsOpen(false);

};

export const SettingsModal = () => {
    const { isSettingsOpen, setIsSettingsOpen } = useContext(ModalContext);
    const settingsContext = useContext(SettingsContext);

    useAddClassEffect(isSettingsOpen);

    const { setSettingsDidModified } = settingsContext;

    return (
        <dialog open={isSettingsOpen} className='dialog' style={{ minWidth: '250px' }}>
            <header style={{ justifyContent: 'space-around'}}>
                <h3>SETTINGS</h3>
                <img src={myImage} alt="close-button" onClick={() => setIsSettingsOpen(false)}></img>
            </header>
            <hr/>
            <form action="GET">
                <div className='input-wrapper'>
                    <div className='label'>
                        <label>Pomodoro duration: </label>
                    </div>   
                    <div className='input'>               
                        <input type="number" name="pomodoro-minutes" className="pomodoro-minutes" placeholder='00' />
                        <p>:</p>
                        <input type="number" name="pomodoro-seconds" className="pomodoro-seconds" placeholder='00' />
                    </div>  
                </div>
                <div className='input-wrapper'>
                    <div className='label'>
                        <label>Short-break duration:</label>
                    </div>  
                    <div className='input'>          
                        <input type="number" name="short-break-minutes" className="short-break-minutes" placeholder='00'/>
                        <p>:</p>
                        <input type="number" name="short-break-seconds" className="short-break-seconds" placeholder='00'/>
                    </div>  
                </div>
                <div className='input-wrapper'>
                    <div className='label'>
                        <label>Long-break duration:</label>               
                    </div>
                    <div className='input'>
                        <input type="number" name="long-break-minutes" className="long-break-minutes" placeholder='00'/>
                        <p>:</p>
                        <input type="number" name="long-break-seconds" className="long-break-seconds" placeholder='00'/>
                    </div>
                </div>
                <Button handleFunction={(event) => submitCounterSettings(event, setSettingsDidModified, setIsSettingsOpen )}>Enviar</Button>
            </form>
        </dialog>
    );
};
