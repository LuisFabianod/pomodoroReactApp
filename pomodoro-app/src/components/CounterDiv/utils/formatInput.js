export const formatInput = (inputMinutesClass, inputSecondsClass, input) => {
    const inputMinutes = document.querySelector(`.${inputMinutesClass}`);
    const inputSeconds = document.querySelector(`.${inputSecondsClass}`);

    const minutes = parseInt(inputMinutes.value) || 0;
    const seconds = parseInt(inputSeconds.value) || 0;

    if (minutes <= 0 && seconds <= 0) {
        const newCounter = 3000;
        return newCounter;
    }

    const newCounter = minutes * 60 + seconds;

    localStorage.setItem(`${input}Counter`, newCounter);

    return newCounter;

};