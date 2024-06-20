import './styles.css'
import { useContext } from 'react'
import { ModalContext } from "../../Context/ModalContext";
import { Button } from '../Button'
import menuIcon from '../../icons/menu.png';

export const Header = () => {
    const { setIsSettingsOpen, setIsShortcutsOpen } = useContext(ModalContext)

    return( 
    <header>
        <div>
            <h1>Pomodoro</h1>
        </div>
        <nav>
            <Button handleFunction={() => {setIsSettingsOpen(true)}}><img src={menuIcon} alt="menu-button"/></Button>
            <Button handleFunction={() => {setIsShortcutsOpen(true)}}>Shortcuts</Button>
        </nav>
    </header>

    )
}