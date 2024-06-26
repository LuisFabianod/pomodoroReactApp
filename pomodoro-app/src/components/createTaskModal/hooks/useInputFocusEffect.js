import { useEffect } from "react";

export const useInputFocusEffect = (isOpen) => {

    useEffect(() => {
        const createTextInput = document.querySelector('#create-task-input');
        if(isOpen){
            createTextInput.focus();
        }

    }, [isOpen])
}
