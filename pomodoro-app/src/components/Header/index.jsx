import './styles.css'
import { Button } from '../Button'
import { ModalContext } from '../../Context/ModalContext/modalContext'
import { useContext } from 'react'

export const Header = () => {

    const { setIsOpen } = useContext(ModalContext)

    return( 
    <header>
        <h1>Pomodoro</h1>
        <Button handleFunction={() => {setIsOpen(true)}}>Shortcuts</Button>
    </header>

    )
}