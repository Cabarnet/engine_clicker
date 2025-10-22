let nutsPerClick = parseInt(localStorage.getItem('nutsPerClick')) || 1;
let chanceSuperClick = parseFloat(localStorage.getItem('chanceSuperClick')) || 0;
let superClickValue = parseFloat(localStorage.getItem('superClickValue')) || 1;
let nuts = parseInt(localStorage.getItem('nuts')) || 1;

function saveVariables() {
    localStorage.setItem('nutsPerClick', nutsPerClick);
    localStorage.setItem('chanceSuperClick', chanceSuperClick);
    localStorage.setItem('superClickValue', superClickValue);
    localStorage.setItem('nuts', nuts);
}

setInterval(() => {
    saveVariables();
}, 3000);