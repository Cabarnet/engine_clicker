const mainView = document.querySelector('.main-view');
const upgradeView = document.querySelector('.upgrade-view');
const workersView = document.querySelector('.workers-view');
const mainViewBtn = document.querySelector('#main-view-btn');
const upgradeViewBtn = document.querySelector('#upgrade-view-btn');
const workersViewBtn = document.querySelector('#workers-view-btn');

const menuButtons = document.querySelectorAll('.bottom-menu button');

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        menuButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

mainViewBtn.addEventListener('click', () => {
    mainView.style.display = 'block';
    upgradeView.style.display = 'none';
    workersView.style.display = 'none';
});

upgradeViewBtn.addEventListener('click', () => {
    mainView.style.display = 'none';
    upgradeView.style.display = 'block';
    workersView.style.display = 'none';
});

workersViewBtn.addEventListener('click', () => {
    mainView.style.display = 'none';
    upgradeView.style.display = 'none';
    workersView.style.display = 'block';
});