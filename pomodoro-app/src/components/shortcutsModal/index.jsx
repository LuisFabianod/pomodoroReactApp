import { useContext, useEffect } from 'react'
import { ModalContext } from "../../Context/ModalContext";
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


export const ShortcutsModal = () => {
    const {isShortcutsOpen, setIsShortcutsOpen } = useContext(ModalContext);

    useAddClassEffect(isShortcutsOpen);
        
    return (
        <dialog open={isShortcutsOpen} className='dialog'>
            <header style={{ justifyContent: 'space-around'}}>
                <h3>SHORTCUTS</h3>
                <img src={myImage} alt="close-button" onClick={() => setIsShortcutsOpen(false)}></img>
            </header>
            <hr/>

            <table>
                <thead>
                    <tr>
                        <th>Command</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Space</td>
                        <td>Timer start/stop</td>
                    </tr>
                    <tr>
                        <td>N</td>
                        <td>Create new task</td>
                    </tr>
                </tbody>
            </table>
           
        </dialog>
    )
}