const mainView = document.querySelector('.main-view');
const upgradeView = document.querySelector('.upgrade-view');
const mainViewBtn = document.querySelector('#main-view-btn');
const upgradeViewBtn = document.querySelector('#upgrade-view-btn');

mainViewBtn.addEventListener('click', () => {
    mainView.style.display = 'block';
    upgradeView.style.display = 'none';
});

upgradeViewBtn.addEventListener('click', () => {
    mainView.style.display = 'none';
    upgradeView.style.display = 'block';
});