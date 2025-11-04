let firstTouch = true;
let secretTouch = 0;
const audioSwitcher = document.querySelector('.audio-switcher');
const backgroundAudio = new Audio('audio/Bicycle Ride - Jeremy Korpas.mp3');
    backgroundAudio.volume = 0.1;
    backgroundAudio.loop = true;
const secretBackgroundAudio = new Audio('audio/Secret.mp3');
    secretBackgroundAudio.volume = 0.5;
    secretBackgroundAudio.loop = true;
const voiceA = new Audio('audio/Uncle_voice1.mp3');
const voiceB = new Audio('audio/Uncle_voice2.mp3');
const voiceC = new Audio('audio/Uncle_voice3.mp3');
const voiceD = new Audio('audio/Uncle_voice4.mp3');
const voiceE = new Audio('audio/Uncle_voice5.mp3');

let voices = [voiceA, voiceB, voiceC, voiceD, voiceE];

window.addEventListener('click', function() {
    if (firstTouch) {
        backgroundAudio.play();
        firstTouch = false;
    }
});

document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    if (secretTouch >= 10) {
        secretBackgroundAudio.pause();
    }
    else {
        backgroundAudio.pause();
    }
  } 
  else {
    if (secretTouch >= 10) {
        secretBackgroundAudio.play();
    }
    else {
    backgroundAudio.play();
    }
  }
});

audioSwitcher.addEventListener('click', function() {
    if (secretTouch >= 10) {
        backgroundAudio.pause();
        secretBackgroundAudio.play();
        return;
    }
    if (backgroundAudio.paused) {
        backgroundAudio.play();
        audioSwitcher.style.cssText = 'background-image: url(img/AudioOn.png);';
    }
    else {
        backgroundAudio.pause();
        audioSwitcher.style.cssText = 'background-image: url(img/AudioOff.png);';
    }
    secretTouch++;
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

function uncleVoice() {
    if (voices.length === 0) {
        voices = [voiceA, voiceB, voiceC, voiceD, voiceE];
    }
    const randomVoice = Math.floor(Math.random() * voices.length);
    const audio = voices[randomVoice];
    audio.volume = 1;
    audio.play();
    voices.splice(voices[randomVoice], 1);
    console.log(voices);
}

export {clickSound, buySound, uncleVoice};