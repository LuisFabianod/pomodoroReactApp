export const playAudio = () => {
    const audio = new Audio(require('../../../audios/announcement.mp3'));
    if (audio) {
        audio.play();
    }
};
