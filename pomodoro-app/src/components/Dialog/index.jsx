import { useContext } from 'react'
import { ModalContext } from '../../Context/modalContext'
import './styles.css'
import myImage from '../../icons/x-mark.png';

export const openModal = (setIsOpen) => {
    setIsOpen(true);
}

const closeModal = ( setIsOpen) => {
    setIsOpen(false);
}


export const Dialog = () => {
    const {isOpen, setIsOpen } = useContext(ModalContext);

    if(isOpen)

    return (

        <dialog open={isOpen} className='dialog'>
            <header style={{ justifyContent: 'space-around'}}>
                <h3>SHORTCUTS</h3>
                <img src={myImage} alt="close-button" onClick={() => closeModal(setIsOpen)}></img>
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