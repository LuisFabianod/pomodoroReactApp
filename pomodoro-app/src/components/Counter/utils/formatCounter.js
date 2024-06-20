export const formatCounter = (counter) => {
    const minutes = Math.floor(counter / 60);
    const seconds = Math.floor(counter % 60);
    return `${( "0" + minutes).slice(-2)}:${( "0" + seconds).slice(-2)}`;
};  