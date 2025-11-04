import { spawnFloatingText, isMobile } from './main-button.js';
import { buySound } from './audio.js';

const hireWorkerBtn = document.querySelector('#hire-worker');
const nutsCount = document.querySelector('#nuts-count span');
let workerInterval = null;

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
    workersEarningsPerSecond += 30;
    priceSpan.textContent = upgradePrice * 1.1 - upgradePrice * 1.1 % 100;

    restartInterval();
    buySound();

    addClassToButton(hireWorkerBtn, 'success', 200);
    saveVariables();
  } else {
    addClassToButton(hireWorkerBtn, 'error', 200);
  }
}

function addNutsByWorker() {
    const button = document.querySelector('#engine');
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const color = "#fcff3d";

    nuts += workersEarningsPerSecond;
    nutsCount.textContent = nuts;

    if (centerX !== 0 && centerY !== 0) {
        spawnFloatingText(centerX, centerY, `+ ${workersEarningsPerSecond}`, color);
    }
}

function showOfflineEarning() {
  const offlineEarning = document.querySelector('.offline-earning');
  const earningSum = offlineEarning.querySelector('#sum');
  const nowTime = new Date().getTime();
  const sum = parseInt((nowTime - lastOfflineTime) / 1000 * workersEarningsPerSecond);

  earningSum.textContent = sum;

  nuts += sum;
  nutsCount.textContent = nuts;

  offlineEarning.style.display = 'block';
  
  saveVariables();
}

function hideOfflineEarning() {
  const offlineEarning = document.querySelector('.offline-earning');
  offlineEarning.style.display = 'none';
}

function stopInterval() {
  clearInterval(workerInterval);
}

function restartInterval() {
  if (workersEarningsPerSecond > 0) {
    stopInterval();
    workerInterval = setInterval(addNutsByWorker, 1000);
  }
}

if (workersEarningsPerSecond > 0) {
  workerInterval = setInterval(addNutsByWorker, 1000);
}

hireWorkerBtn.addEventListener('click', hireWorker);
window.addEventListener('load', () => {
  if(workersEarningsPerSecond > 0) showOfflineEarning();
});
document.querySelector('#close-offline-earning').addEventListener('click', hideOfflineEarning);

export { stopInterval, restartInterval };