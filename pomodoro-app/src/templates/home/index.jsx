import React, { useState } from "react";
import './styles.css'
import { Header } from '../../components/Header'
import { Dialog } from '../../components/Dialog'
import { ModalContext } from "../../Context/modalContext";



export const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <ModalContext.Provider value={{isOpen, setIsOpen}}>
        <body>
        <Header>
            
        </Header>
        <Dialog>

        </Dialog>
        
        </body>
        </ModalContext.Provider>

    )
}