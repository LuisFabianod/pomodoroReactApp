import { useEffect } from "react";

export const useKeyPressEffect = (setIsCreateTaskOpen, key, state) => {
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === key) {
                setIsCreateTaskOpen(state);
            }
        };
        document.addEventListener('keypress', handleKeyPress);
        return () => document.removeEventListener('keypress', handleKeyPress);
    }, [setIsCreateTaskOpen, key, state]);
};
