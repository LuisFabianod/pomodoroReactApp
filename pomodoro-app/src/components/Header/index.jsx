import './styles.css'
import { Button } from '../Button'
import { ModalContext } from "../../Context/ModalContext";
import { useContext } from 'react'
import myImage from '../../icons/menu.png';

export const Header = () => {

    const { setIsSettingsOpen, setIsShortcutsOpen } = useContext(ModalContext)

    return( 
    <header>
        <div>
        <h1>Pomodoro</h1>
        </div>
        <nav>
        <Button handleFunction={() => {setIsSettingsOpen(true)}}><img src={myImage} alt="menu-button"/></Button>
        <Button handleFunction={() => {setIsShortcutsOpen(true)}}>Shortcuts</Button>
        </nav>
    </header>

    )
}