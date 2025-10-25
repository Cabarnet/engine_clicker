import {addNutsPerClick, superClick, isMobile} from './main-button.js';

const nutsPerClickBtn = document.querySelector('#up-nuts-per-click');
const chanceSuperClickBtn = document.querySelector('#up-chance-super-click');
const superClickValueBtn = document.querySelector('#up-super-click-value');

const updateData = {
    nutsPerClick: {
        type: 'nutsPerClick',
        price: nutsPerClickPrice,
        btn: nutsPerClickBtn
    },
    chanceSuperClick: {
        type: 'superClickChance',
        price: chanceSuperClickPrice,
        btn: chanceSuperClickBtn
    },
    superClickValue: {
        type: 'superClickValue',
        price: superClickValuePrice,
        btn: superClickValueBtn
    }
};

const nutsCount = document.querySelector('#nuts-count span');

nutsCount.textContent = nuts;

function upgradeProperty(priceSpan, button, type) {
    let upgradePrice = priceSpan.textContent;
    let priceMultiplier;

    if (nuts >= upgradePrice) {
        nuts -= upgradePrice;
        nutsCount.textContent = nuts;

        switch (type) {
            case 'nutsPerClick':
                nutsPerClick += 1;
                priceMultiplier = 1.5;
                break;
            case 'superClickChance':
                chanceSuperClick += 0.005;
                priceMultiplier = 1.5;
                break;
            case 'superClickValue':
                superClickValue += 0.1;
                priceMultiplier = 1.5;
                break;
        }

        if (upgradePrice < 100) {
            priceSpan.textContent = parseInt(upgradePrice * priceMultiplier);
        }
        else if (upgradePrice < 1000) {
            priceSpan.textContent = parseInt(upgradePrice * priceMultiplier) - parseInt(upgradePrice * priceMultiplier) % 10;
        }
        else if (upgradePrice < 10000) {
            priceSpan.textContent = parseInt(upgradePrice * priceMultiplier) - parseInt(upgradePrice * priceMultiplier) % 100;
        }
        else {
            priceSpan.textContent = parseInt(upgradePrice * priceMultiplier) - parseInt(upgradePrice * priceMultiplier) % 1000;
        }

        saveVariables();
        
        button.classList.add('success');
        setTimeout(() => {
            button.classList.remove('success');
        }, 200);
    }
    else {
        button.classList.add('error');
        setTimeout(() => {
            button.classList.remove('error');
        }, 200);

    }
}

let interval;
let timeout;
function updateProccess ({ type, price, btn }) {
    upgradeProperty(price, btn, type);
    timeout = setTimeout(() => {
        interval = setInterval(() => {
            upgradeProperty(price, btn, type);
        }, 100);
    }, 500);
}

if (isMobile()) {
    nutsPerClickBtn.addEventListener('touchstart', () => {
        updateProccess(updateData.nutsPerClick);
    });
    chanceSuperClickBtn.addEventListener('touchstart', () => {
        updateProccess(updateData.chanceSuperClick);
    });
    superClickValueBtn.addEventListener('touchstart', () => {
        updateProccess(updateData.superClickValue);
    });
    document.addEventListener('touchend', () => {
        clearInterval(interval);
        clearTimeout(timeout);
    });
}
else {
    nutsPerClickBtn.addEventListener('mousedown', () => {
        updateProccess(updateData.nutsPerClick);
    });
    chanceSuperClickBtn.addEventListener('mousedown', () => {
        updateProccess(updateData.chanceSuperClick);
    });
    superClickValueBtn.addEventListener('mousedown', () => {
        updateProccess(updateData.superClickValue);
    });
    document.addEventListener('mouseup', () => {
        clearInterval(interval);
        clearTimeout(timeout);
    });
}