const upgradeNutsPerClickBtn = document.querySelector('#up-nuts-per-click');
const upgradeChanceSuperClickBtn = document.querySelector('#up-chance-super-click');
const upgradeSuperClickValueBtn = document.querySelector('#up-super-click-value');
const nutsCount = document.querySelector('#nuts-count span');

nutsCount.textContent = nuts;

function upgradeProperty(priceSpan, button, type) {
    upgradePrice = priceSpan.textContent;

    if (nuts >= upgradePrice) {
        nuts -= upgradePrice;
        nutsCount.textContent = nuts;

        if (type == 'superClickChance') {
            chanceSuperClick += 0.005;
            priceSpan.textContent = parseInt(upgradePrice * 1.5);
        }

        if (type == 'nutsPerClick') {
            nutsPerClick += 1;
            priceSpan.textContent = parseInt(upgradePrice * 1.5);
        }

        if (type == 'superClickValue') {
            superClickValue += 0.1;
            priceSpan.textContent = parseInt(upgradePrice * 1.5);
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