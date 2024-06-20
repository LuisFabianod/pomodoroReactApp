import { useEffect } from "react";

export const useKeyPressEffect = (handleStartCounter) => {
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === ' ') {
                handleStartCounter();
            }
        };
        document.addEventListener('keypress', handleKeyPress);
        return () => document.removeEventListener('keypress', handleKeyPress);
    }, [handleStartCounter]);
};
