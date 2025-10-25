import {addNutsPerClick, superClick} from './main-button.js';

const upgradeNutsPerClickBtn = document.querySelector('#up-nuts-per-click');
const upgradeChanceSuperClickBtn = document.querySelector('#up-chance-super-click');
const upgradeSuperClickValueBtn = document.querySelector('#up-super-click-value');
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

upgradeNutsPerClickBtn.addEventListener('click', () => {
    upgradeProperty(document.querySelector('#up-nuts-per-click span'), upgradeNutsPerClickBtn, 'nutsPerClick');
});
upgradeChanceSuperClickBtn.addEventListener('click', () => {
    upgradeProperty(document.querySelector('#up-chance-super-click span'), upgradeChanceSuperClickBtn, 'superClickChance');
});
upgradeSuperClickValueBtn.addEventListener('click', () => {
    upgradeProperty(document.querySelector('#up-super-click-value span'), upgradeSuperClickValueBtn, 'superClickValue');
});