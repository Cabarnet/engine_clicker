let firstTouch = true;
const backgroundAudio = new Audio('audio/Bicycle Ride - Jeremy Korpas.mp3');

window.addEventListener('click', function() {
    if (firstTouch) {
        backgroundAudio.volume = 0.1;
        backgroundAudio.loop = true;
        backgroundAudio.play();
        firstTouch = false;
    }
});

document.querySelector('#workers-view-btn').addEventListener('click', function() {
    backgroundAudio.pause();
});

function clickSound() {
    const audio = new Audio('audio/click.mp3');
    audio.volume = 0.2;
    audio.play();
}

function buySound() {
    const audio = new Audio('audio/Selled.mp3');
    audio.volume = 0.2;
    audio.play();
}

export {clickSound, buySound};