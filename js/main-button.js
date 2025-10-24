function addNutsPerClick(event) {
    let finalNuts = superClick(nutsPerClick);

    nuts += finalNuts;
    nutsCount.textContent = nuts;

    spawnFloatingText(event.clientX, event.clientY, '+ ' + finalNuts);
}

function superClick(nuts) {
    if (Math.random() < chanceSuperClick) {
        console.log(Math.random(), chanceSuperClick);
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

    document.body.appendChild(floatEl);

    setTimeout(() => floatEl.remove(), duration * 12000);
}

document.querySelector('#engine').addEventListener('touchend', (event) => {
    addNutsPerClick(event);
});

// setInterval(() => addNutsPerClick(), 1000);