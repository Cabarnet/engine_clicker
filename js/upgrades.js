import {addNutsPerClick, superClick, isMobile} from './main-button.js';
import { secondQuestDialog } from './main-quest.js';

const nutsPerClickBtn = document.querySelector('#up-nuts-per-click');
const chanceSuperClickBtn = document.querySelector('#up-chance-super-click');
const superClickValueBtn = document.querySelector('#up-super-click-value');
const upgradeEngineBtn = document.querySelector('#upgrade-engine');

let interval;
let timeout;

const upgradeData = {
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
                priceMultiplier = 1.1;
                break;
            case 'superClickChance':
                chanceSuperClick += 0.01;
                priceMultiplier = 1.1;
                break;
            case 'superClickValue':
                superClickValue += 0.5;
                priceMultiplier = 1.1;
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

function upgradeProccess ({ type, price, btn }) {
    upgradeProperty(price, btn, type);
    timeout = setTimeout(() => {
        interval = setInterval(() => {
            upgradeProperty(price, btn, type);
        }, 100);
    }, 500);
}

function upgradeEngine() {
    const mainPage = document.querySelector('#main-view-btn');
    const mainButton = document.querySelector('#engine');
    const nutsCount = document.querySelector('#nuts-count');
    const bottomMenu = document.querySelector('.bottom-menu');

    mainPage.click();

    nutsCount.style.display = 'none';
    bottomMenu.style.display = 'none';

    setTimeout(() => {
        mainButton.style.cssText = 'opacity: 0;';
    });
    setTimeout(() => {
        mainButton.style.cssText = 'background-image: url(../img/Engine.png); opacity: 1; filter: drop-shadow(0 0 25px #fffce5)';
    }, 3000);
    setTimeout(() => {
        nutsCount.style.display = 'block';
        bottomMenu.style.display = 'flex';
        secondQuestDialog();
        mainButton.style.cssText = 'background-image: url(../img/Engine.png);';
    }, 6000);
}

if (isMobile()) {
    nutsPerClickBtn.addEventListener('touchstart', () => {
        upgradeProccess(upgradeData.nutsPerClick);
    });
    chanceSuperClickBtn.addEventListener('touchstart', () => {
        upgradeProccess(upgradeData.chanceSuperClick);
    });
    superClickValueBtn.addEventListener('touchstart', () => {
        upgradeProccess(upgradeData.superClickValue);
    });
    document.addEventListener('touchend', () => {
        clearInterval(interval);
        clearTimeout(timeout);
    });
}
else {
    nutsPerClickBtn.addEventListener('mousedown', () => {
        upgradeProccess(upgradeData.nutsPerClick);
    });
    chanceSuperClickBtn.addEventListener('mousedown', () => {
        upgradeProccess(upgradeData.chanceSuperClick);
    });
    superClickValueBtn.addEventListener('mousedown', () => {
        upgradeProccess(upgradeData.superClickValue);
    });
    document.addEventListener('mouseup', () => {
        clearInterval(interval);
        clearTimeout(timeout);
    });
}

upgradeEngineBtn.addEventListener('click', upgradeEngine);