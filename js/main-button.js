const nutsCount = document.querySelector('#nuts-count span');

function addNutsPerClick() {
    let finalNuts = superClick(nutsPerClick);

    nuts += finalNuts;
    nutsCount.textContent = nuts;

    const button = document.querySelector('#engine');
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    if (centerX !== 0 && centerY !== 0) spawnFloatingText(centerX, centerY, '+ ' + finalNuts);
}

function superClick(nuts) {
    if (Math.random() < chanceSuperClick) {
        return parseInt(nuts * superClickValue);
    }
    else {
        return nuts;
    }
}

function spawnFloatingText(x, y, text) {
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

    document.querySelector('.main-view').appendChild(floatEl);

    setTimeout(() => floatEl.remove(), duration * 1000);
}

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
}

function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent);
}

if (!isIOS() && isMobile()) {
    document.querySelector('#engine').addEventListener('touchstart', addNutsPerClick);
}
else {
    document.querySelector('#engine').addEventListener('click', addNutsPerClick);
}

document.querySelector('#restart-game').addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

export {addNutsPerClick, superClick}; 

// setInterval(addNutsPerClick, 100);