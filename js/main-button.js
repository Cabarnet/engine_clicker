const nutsCount = document.querySelector('#nuts-count span');

function addNutsPerClick() {
    let color = "#fcff3d";
    let finalNuts = nutsPerClick;

    if (superClick()) {
        finalNuts = parseInt(nutsPerClick * superClickValue);
        color = "#ff0000";
    }

    nuts += finalNuts;
    nutsCount.textContent = nuts;

    const button = document.querySelector('#engine');
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    console.log(color);
    if (centerX !== 0 && centerY !== 0) spawnFloatingText(centerX, centerY, '+ ' + finalNuts, color);
}

function superClick() {
    if (Math.random() < chanceSuperClick) {
        return true;
    }
    else {
        return false;
    }
}

function spawnFloatingText(x, y, text, color) {
    const floatEl = document.createElement('div');
    floatEl.textContent = text;
    floatEl.className = 'floating-text';

    // Случайный угол (влево/вправо), сила разброса
    const angle = (Math.random() * 30) * (Math.random() > 0.5 ? 1 : -1);
    const distance = 80 + Math.random() * 40; // дальность полёта
    const duration = 0.8 + Math.random() * 0.4; // длительность анимации

    floatEl.style.left = x + 'px';
    floatEl.style.top = y + 'px';

    floatEl.style.setProperty('--angle', angle + 'deg');
    floatEl.style.setProperty('--distance', distance + 'px');
    floatEl.style.setProperty('--duration', duration + 's');
    floatEl.style.setProperty('--color', color);

    document.querySelector('.main-view').appendChild(floatEl);

    setTimeout(() => floatEl.remove(), duration * 1000);
}

function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent);
}

if (isMobile()) {
    document.querySelector('#engine').addEventListener('touchstart', addNutsPerClick);
}
else {
    document.querySelector('#engine').addEventListener('click', addNutsPerClick);
}

window.addEventListener('load', () => {
    const mainButton = document.querySelector('#engine');

    if (questCheckpoint === 0 || questCheckpoint === 1) {
        mainButton.style.cssText = 'background-image: url(../img/Engine_crack.png);';
    }
    if (questCheckpoint === 2) {
        mainButton.style.cssText = 'background-image: url(../img/Engine.png);';
    }
});

document.querySelector('#restart-game').addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

export {addNutsPerClick, superClick, spawnFloatingText, isMobile}; 