import { useEffect } from "react";

export const useKeyPressEffect = (setIsCreateTaskOpen, key, state) => {
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === key) {
                setTimeout(() => {
                    setIsCreateTaskOpen(state);
                }, 100)
                
            }
        };
        document.addEventListener('keypress', handleKeyPress);
        return () => document.removeEventListener('keypress', handleKeyPress);
    }, [setIsCreateTaskOpen, key, state]);
};
