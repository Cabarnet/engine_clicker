let nutsPerClick = parseInt(localStorage.getItem('nutsPerClick')) || 1;
let chanceSuperClick = parseFloat(localStorage.getItem('chanceSuperClick')) || 0;
let superClickValue = parseFloat(localStorage.getItem('superClickValue')) || 1;
let nuts = parseInt(localStorage.getItem('nuts')) || 1000000000;

const nutsPerClickPrice = document.querySelector('#up-nuts-per-click span');
const chanceSuperClickPrice = document.querySelector('#up-chance-super-click span');
const superClickValuePrice = document.querySelector('#up-super-click-value span');

nutsPerClickPrice.textContent = parseInt(localStorage.getItem('nutsPerClickPrice')) || 10;
chanceSuperClickPrice.textContent = parseInt(localStorage.getItem('chanceSuperClickPrice')) || 100;
superClickValuePrice.textContent = parseInt(localStorage.getItem('superClickValuePrice')) || 100;

function saveVariables() {
    localStorage.setItem('nutsPerClick', nutsPerClick);
    localStorage.setItem('chanceSuperClick', chanceSuperClick);
    localStorage.setItem('superClickValue', superClickValue);
    localStorage.setItem('nuts', nuts);

    localStorage.setItem('nutsPerClickPrice', nutsPerClickPrice.textContent);
    localStorage.setItem('chanceSuperClickPrice', chanceSuperClickPrice.textContent);
    localStorage.setItem('superClickValuePrice', superClickValuePrice.textContent);
}

setInterval(() => {
    saveVariables();
}, 10000);