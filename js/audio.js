let firstTouch = true;
const backgroundAudio = new Audio('audio/Bicycle Ride - Jeremy Korpas.mp3');
const audioSwitcher = document.querySelector('.audio-switcher');

window.addEventListener('click', function() {
    if (firstTouch) {
        backgroundAudio.volume = 0.1;
        backgroundAudio.loop = true;
        backgroundAudio.play();
        firstTouch = false;
    }
});

audioSwitcher.addEventListener('click', function() {
    if (backgroundAudio.paused) {
        backgroundAudio.play();
        audioSwitcher.style.cssText = 'background-image: url(img/AudioOn.png);';
    }
    else {
        backgroundAudio.pause();
        audioSwitcher.style.cssText = 'background-image: url(img/AudioOff.png);';
    }
});

function clickSound() {
    const audio = new Audio('audio/Click.mp3');
    audio.volume = 0.2;
    audio.play();
}

function buySound() {
    const audio = new Audio('audio/Selled.mp3');
    audio.volume = 0.2;
    audio.play();
}

export {clickSound, buySound};