import { useEffect } from "react";

export const useKeyPressEffect = (handleStartCounter, isCreateTaskOpen) => {
    useEffect(() => {
        if(isCreateTaskOpen) return;
        const handleKeyPress = (event) => {
            if (event.key === ' ') {
                handleStartCounter();
            }
        };
        document.addEventListener('keypress', handleKeyPress);
        return () => document.removeEventListener('keypress', handleKeyPress);
    }, [handleStartCounter, isCreateTaskOpen]);
};
