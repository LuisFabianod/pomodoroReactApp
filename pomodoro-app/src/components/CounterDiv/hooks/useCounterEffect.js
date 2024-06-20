import { useEffect } from "react";
import { playAudio } from "../utils/playAudio";

export const useCounterEffect = (isCounterActive, counter, setCounter, setIsCounterActive) => {
    useEffect(() => {
        let timer;
        if (isCounterActive && counter > 0) {
            timer = setTimeout(() => setCounter(counter - 1), 1000);
        } else if (counter <= 0) {
            playAudio();
            setIsCounterActive(false);
        }
        return () => clearTimeout(timer);
    }, [isCounterActive, counter, setCounter, setIsCounterActive]);
};