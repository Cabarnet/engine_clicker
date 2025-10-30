const mainQuestText = {
    1.1: 'Хахахахахаха, ну ты и кринж конечно',
    1.2: 'Как можно было купить машину с трещиной в движке',
    1.3: 'Вероятность того, что она будет работать, очень низкая',
    1.4: 'Если ты вдруг не знал'
}
let checkpoint = 0;
const dialog = document.querySelector('.main-quest-dialog');

function showQuestDialog(img, text) {
    const background = document.querySelector('.background');
    const questText = document.querySelector('#main-quest-text');
    const image = document.querySelector('.main-quest-dialog img');
    const continueBtn = document.querySelector('.continue');

    image.src = `img/Support_${img}.png`;
    questText.textContent = mainQuestText[text];
    dialog.style.display = 'block';

    setTimeout(function() {
        background.style.opacity = 1;
    }, 100);
    
    setTimeout(function() {
        image.style.left = "35%";
        image.style.opacity = 1;
    }, 200);

    setTimeout(function() {
        questText.style.opacity = 1;
    }, 200);

    setTimeout(function() {
        continueBtn.style.display = 'block';
    }, 5000);
}

function hideQuestDialog() {
    const background = document.querySelector('.background');
    const continueBtn = document.querySelector('.continue');
    background.style.opacity = 0;
    continueBtn.style.display = 'none';
    dialog.style.display = 'none';
}

window.addEventListener('load', () => {
    setTimeout(showQuestDialog('Funny', 1.1), 2000);
});
dialog.addEventListener('click', () => {
    switch (checkpoint) {
        case 0:
            showQuestDialog('Happy', 1.2);
            break;
        case 1:
            showQuestDialog('Funny', 1.3);
            break;
        case 2:
            showQuestDialog('Funny', 1.4);
            break;
        case 3:
            hideQuestDialog();
            break;
        default:
            break;
    }
    checkpoint++;
})