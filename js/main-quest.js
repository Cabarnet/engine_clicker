const mainQuestText = {
    1.1: 'Хахахахахаха, ну ты и кринж конечно',
    1.2: 'Как можно было купить машину с трещиной в движке',
    1.3: 'Вероятность того, что она будет работать, очень низкая',
    1.4: 'Если ты вдруг не знал',
    1.5: 'Ну ладно так уж и быть',
    1.6: 'Держи ключи от моего гаража',
    1.7: 'Всё равно гараж простаивает, машина пока на даче',
    1.8: 'Поработай руками и попробуй починить двигатель!',
    2.1: 'А ты не плох!',
    2.2: 'Почти даже не заметно!',
    2.3: 'Хахахах шучу, сделать так плохо это надо постараться',
    2.4: 'Ну хоть работает',
}

let step = 0;
const dialog = document.querySelector('.main-quest-dialog');
const background = dialog.querySelector('.background');
const questText = dialog.querySelector('#main-quest-text');
const image = dialog.querySelector('.main-quest-dialog img');
const continueBtn = dialog.querySelector('.continue');

function showQuestDialog(img, text) {
    let questPesron = 'Дядь Вась';
    image.src = `img/Support_${img}.png`;
    questText.innerHTML = `<h4>${questPesron}</h4>` + mainQuestText[text];
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

    let helperTimeout = setTimeout(function() {
       continueBtn.style.display = 'block';
    }, 5000);

    dialog.addEventListener('click', () => {
        continueBtn.style.display = 'none';
        clearTimeout(helperTimeout);
    })
}

function hideQuestDialog() {    
    background.style.opacity = 0;
    
    image.style.animation = 'fadeOut 0.5s forwards';
    questText.style.animation = 'fadeOut 0.5s forwards';

    setTimeout(function() {
        dialog.style.display = 'none';
        background.style = '';
        image.style = '';
        questText.style = '';
    }, 500);
}

function secondQuestDialog() {
    step = 0;
    showQuestDialog('Happy', 2.1);
    dialog.addEventListener('click', () => {
        console.log(step);
        switch (step) {
            case 0:
                console.log(step);
                showQuestDialog('Happy', 2.2);
                break;
            case 1:
                showQuestDialog('Funny', 2.3);
                break;
            case 2:
                showQuestDialog('Funny', 2.4);
                break;
            case 3:
                questCheckpoint = 2;
                saveVariables();
                hideQuestDialog();
                break;
            default:
                break;
        }
        step++;
    });
}

if (questCheckpoint === 0) {
    window.addEventListener('load', () => {
        setTimeout(showQuestDialog('Funny', 1.1), 2000);
    });
}
dialog.addEventListener('click', () => {
    if (questCheckpoint === 0) {
        switch (step) {
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
                showQuestDialog('Happy', 1.5);
                break;
            case 4:
                showQuestDialog('Happy', 1.6);
                break;
            case 5:
                showQuestDialog('Happy', 1.7);
                break;
            case 6:
                showQuestDialog('Strict', 1.8);
                break;
            case 7:
                questCheckpoint = 1;
                saveVariables();
                hideQuestDialog();
                break;
            default:
                break;
        }
        step++;
    }
});


export { secondQuestDialog };