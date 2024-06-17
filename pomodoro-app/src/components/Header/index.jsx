import './styles.css'
import { Button } from '../Button'
import { openModal } from '../Dialog'
import { ModalContext } from '../../Context/modalContext'
import { useContext } from 'react'


export const Header = () => {

    const { isOpen, setIsOpen } = useContext(ModalContext)

    return( 
    <header>
        <h1>Pomodoro</h1>
        <Button handleFunction={() => {openModal(setIsOpen)}}>Shortcuts</Button>
    </header>

    )
}