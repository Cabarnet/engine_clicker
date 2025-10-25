let nutsPerClick = parseInt(localStorage.getItem('nutsPerClick')) || 1;
let chanceSuperClick = parseFloat(localStorage.getItem('chanceSuperClick')) || 0;
let superClickValue = parseFloat(localStorage.getItem('superClickValue')) || 1;
let nuts = parseInt(localStorage.getItem('nuts')) || 100000000000;

const upNutsPerClickPrice = document.querySelector('#up-nuts-per-click span');
const upChanceSuperClickPrice = document.querySelector('#up-chance-super-click span');
const upSuperClickValuePrice = document.querySelector('#up-super-click-value span');

upNutsPerClickPrice.textContent = parseInt(localStorage.getItem('upNutsPerClickPrice')) || 10;
upChanceSuperClickPrice.textContent = parseInt(localStorage.getItem('upChanceSuperClickPrice')) || 100;
upSuperClickValuePrice.textContent = parseInt(localStorage.getItem('upSuperClickValuePrice')) || 100;

function saveVariables() {
    localStorage.setItem('nutsPerClick', nutsPerClick);
    localStorage.setItem('chanceSuperClick', chanceSuperClick);
    localStorage.setItem('superClickValue', superClickValue);
    localStorage.setItem('nuts', nuts);

    localStorage.setItem('upNutsPerClickPrice', upNutsPerClickPrice.textContent);
    localStorage.setItem('upChanceSuperClickPrice', upChanceSuperClickPrice.textContent);
    localStorage.setItem('upSuperClickValuePrice', upSuperClickValuePrice.textContent);
}

setInterval(() => {
    saveVariables();
}, 3000);