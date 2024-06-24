import './styles.css'
import { useContext } from 'react'
import { ModalContext } from "../../Context/ModalContext";
import closeIcon from '../../icons/x-mark.png';

import { useAddClassEffect } from './hooks/useAddClassEffect';

export const ShortcutsModal = () => {
    const {isShortcutsOpen, setIsShortcutsOpen } = useContext(ModalContext);

    useAddClassEffect(isShortcutsOpen);
        
    return (
        <dialog open={isShortcutsOpen} className='dialog'>
            <header>
                <h3>SHORTCUTS</h3>
                <img src={closeIcon} alt="close-button" onClick={() => setIsShortcutsOpen(false)}></img>
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