import { useContext, useEffect } from 'react'
import { ModalContext } from "../../Context/ModalContext";
import { Button } from '../Button'
import './styles.css'
import myImage from '../../icons/x-mark.png';

const useAddClassEffect = (isOpen) => {
    useEffect(() => {
        const body = document.querySelector('body');
        if(isOpen){ 
            body.classList.add('modal-open');
        }else{
            body.classList.remove('modal-open');
        }

    }, [isOpen])
}


export const SettingsModal = () => {
    const { isSettingsOpen, setIsSettingsOpen } = useContext(ModalContext)

    useAddClassEffect(isSettingsOpen);
        
    return (
        <dialog open={isSettingsOpen} className='dialog' style={{minWidth: '250px'}}>
            <header style={{ justifyContent: 'space-around'}}>
                <h3>SETTINGS</h3>
                <img src={myImage} alt="close-button" onClick={() => setIsSettingsOpen(false)}></img>
            </header>
            <hr/>
            <form action="GET">

                <div className='input-wrapper'>
                    <div className='lable'>
                        <label>Pomodoro duration: </label>
                    </div>   
                    <div className='input'>               
                        <input type="number" name="pomodoro-minutes" className="pomodoro-minutes" placeholder='00' />
                        <p>:</p>
                        <input type="number" name="pomodoro-seconds" className="pomodoro-seconds" placeholder='00' />
                    </div>  
                </div>

                <div className='input-wrapper'>
                    <div className='lable'>
                        <label>Short-breake duration:</label>
                    </div>  
                    <div className='input'>          
                        <input type="number" name="short-breake-minutes" className="short-breake-minutes" placeholder='00'/>
                        <p>:</p>
                        <input type="number" name="short-breake-seconds" className="short-breake-seconds" placeholder='00'/>
                    </div>  
                </div>
        
                <div className='input-wrapper'>
                    <div className='lable'>
                        <label>Long-breake duration:</label>               
                    </div>
                    <div className='input'>
                        <input type="number" name="long-breake-minutes" className="long-breake-minutes" placeholder='00'/>
                        <p>:</p>
                        <input type="number" name="long-breake-seconds" className="long-breake-seconds" placeholder='00'/>
                    </div>
                </div>
            
                <Button handleFunction={(e) => e.preventDefault()}>Enviar</Button>
            </form>

           
           
        </dialog>
    )
}