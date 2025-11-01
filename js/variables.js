let nutsPerClick = parseInt(localStorage.getItem('nutsPerClick')) || 1;
let chanceSuperClick = parseFloat(localStorage.getItem('chanceSuperClick')) || 0;
let superClickValue = parseFloat(localStorage.getItem('superClickValue')) || 1;
let workersEarningsPerSecond = parseInt(localStorage.getItem('workersEarningsPerSecond')) || 0;
let nuts = parseInt(localStorage.getItem('nuts')) || 0;

let questCheckpoint = parseInt(localStorage.getItem('questCheckpoint')) || 0;

const nutsPerClickPrice = document.querySelector('#up-nuts-per-click span');
const chanceSuperClickPrice = document.querySelector('#up-chance-super-click span');
const superClickValuePrice = document.querySelector('#up-super-click-value span');
const workerPrice = document.querySelector('#hire-worker span');

nutsPerClickPrice.textContent = parseInt(localStorage.getItem('nutsPerClickPrice')) || 10;
chanceSuperClickPrice.textContent = parseInt(localStorage.getItem('chanceSuperClickPrice')) || 100;
superClickValuePrice.textContent = parseInt(localStorage.getItem('superClickValuePrice')) || 100;
workerPrice.textContent = parseInt(localStorage.getItem('workerPrice')) || 1000;

function saveVariables() {
    localStorage.setItem('nutsPerClick', nutsPerClick);
    localStorage.setItem('chanceSuperClick', chanceSuperClick);
    localStorage.setItem('superClickValue', superClickValue);
    localStorage.setItem('workersEarningsPerSecond', workersEarningsPerSecond);
    localStorage.setItem('nuts', nuts);

    localStorage.setItem('questCheckpoint', questCheckpoint);

    localStorage.setItem('nutsPerClickPrice', nutsPerClickPrice.textContent);
    localStorage.setItem('chanceSuperClickPrice', chanceSuperClickPrice.textContent);
    localStorage.setItem('superClickValuePrice', superClickValuePrice.textContent);
    localStorage.setItem('workerPrice', workerPrice.textContent);
}

setInterval(() => {
    saveVariables();
}, 10000);