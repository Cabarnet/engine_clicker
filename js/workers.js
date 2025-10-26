import { spawnFloatingText, isMobile } from './main-button.js';

const hireWorkerBtn = document.querySelector('#hire-worker');
const nutsCount = document.querySelector('#nuts-count span');
let workersEarningsPerSecond = 0;
let intervalId = null;

function addClassToButton(button, className, duration) {
  button.classList.add(className);
  setTimeout(() => {
    button.classList.remove(className);
  }, duration);
}

function hireWorker() {
  const priceSpan = document.querySelector('#hire-worker span');
  const upgradePrice = parseInt(priceSpan.textContent);

  if (nuts >= upgradePrice) {
    nuts -= upgradePrice;
    nutsCount.textContent = nuts;
    workersEarningsPerSecond += 100;
    priceSpan.textContent = upgradePrice * 1.1 - upgradePrice * 1.1 % 100;

    restartInterval();

    addClassToButton(hireWorkerBtn, 'success', 200);
  } else {
    addClassToButton(hireWorkerBtn, 'error', 200);
  }
}

function addNutsByWorker() {
    const button = document.querySelector('#engine');
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    nuts += workersEarningsPerSecond;
    nutsCount.textContent = nuts;

    if (centerX !== 0 && centerY !== 0) {
        spawnFloatingText(centerX, centerY, `+ ${workersEarningsPerSecond}`);
    }
}

hireWorkerBtn.addEventListener('click', hireWorker);

if (workersEarningsPerSecond > 0) {
  intervalId = setInterval(addNutsByWorker, 1000);
}

function stopInterval() {
  clearInterval(intervalId);
}

function restartInterval() {
  stopInterval();
  intervalId = setInterval(addNutsByWorker, 1000);
}