import { useEffect } from "react";

export const useAddClassEffect = (isOpen) => {
    useEffect(() => {
        const body = document.querySelector('body');
        if(isOpen){ 
            body.classList.add('modal-open');
        }else{
            body.classList.remove('modal-open');
        }
    }, [isOpen]);
};
