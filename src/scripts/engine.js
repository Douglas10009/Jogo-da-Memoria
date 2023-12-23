// Todos os emojis selecionados
const aldeoes = [
    "<img src='https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png' style='width: 100px;'>",
    "<img src='https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png' style='width: 100px;'>",
    "<img src='https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png' style='width: 100px;'>",
    "<img src='https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png' style='width: 100px;'>",
    "<img src='https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png' style='width: 100px;'>",
    "<img src='https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png' style='width: 100px;'>",
    "<img src='https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png' style='width: 100px;'>",
    "<img src='https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png' style='width: 100px;'>",
    "<img src='https://stardewvalleywiki.com/mediawiki/images/8/88/Grandpa.png' style='width: 100px;'>",
    "<img src='https://stardewvalleywiki.com/mediawiki/images/8/88/Grandpa.png' style='width: 100px;'>",
    "<img src='https://stardewvalleywiki.com/mediawiki/images/3/37/Marlon.png' style='width: 100px;'>",
    "<img src='https://stardewvalleywiki.com/mediawiki/images/3/37/Marlon.png' style='width: 100px;'>",
    "<img src='https://stardewvalleywiki.com/mediawiki/images/2/2b/Lewis.png' style='width: 100px;'>",
    "<img src='https://stardewvalleywiki.com/mediawiki/images/2/2b/Lewis.png' style='width: 100px;'>",
    "<img src='https://stardewvalleywiki.com/mediawiki/images/5/52/Gus.png' style='width: 100px;'>",
    "<img src='https://stardewvalleywiki.com/mediawiki/images/5/52/Gus.png' style='width: 100px;'>",
];

// Emojis abertos
let openCards = [];

// Permite sortear baseado em uma função (Melhor forma de aleatorizar, 2 elemeentos com o mesmo valor e o pc que decide como vai organizar)
let shuffleAldeoes = aldeoes.sort(() => (Math.random() > 0.5 ? 2 : -1));


for (let i = 0; i < aldeoes.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffleAldeoes[i];

    box.onclick = handleClick;

    // Coloca os elementos no .game
    document.querySelector('.game').appendChild(box)
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add('boxOpen');

        openCards.push(this)

        if (openCards.length == 2) {
            setTimeout(checkMatch, 500);
            // checkMatch();
        }
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add('boxMatch');
        openCards[1].classList.add('boxMatch');
    } else {
        openCards[0].classList.remove('boxOpen');
        openCards[1].classList.remove('boxOpen');
    }
    openCards = [];
}





// Minhas adições

const playAudio = (file) => {
    const audio = new Audio(`./src/audio/${file}.mp3`);
    audio.play();
    audio.volume = 0.5;

}

const state = {
    visualTimer: document.querySelector('#timer'),
    semanticTimer: 40,
    cards: document.querySelectorAll('.item'),
    imgJunimoHappyCampo: document.querySelector('.img-happy'),
    imgJunimoSadCampo: document.querySelector('.img-sad'),
    telaVitoria: document.querySelector('.win'),
    telaPerda: document.querySelector('.fail'),
}

console.log(state.semanticTimer);

const setTimer = () => {
    setInterval(() => {
        
        if (state.semanticTimer != 0) {
            state.semanticTimer--;
            state.visualTimer.innerHTML = state.semanticTimer;
        }

        // armengue
        if (document.querySelectorAll('.boxMatch').length === aldeoes.length || state.semanticTimer == 0) {
            verifyVictoryFail();
        }

    }, 1000)
}

const verifyVictoryFail = () => {
    let victory = false;

    if (state.semanticTimer == 0) {
        if (document.querySelectorAll('.boxMatch').length !== aldeoes.length) {
            victory = false;
        }
    }

    if (document.querySelectorAll('.boxMatch').length === aldeoes.length) {
        victory = true;
    }


    victoryFail(victory);
}


const addRandomJunimos = (victory) => {
    const srcHappy = ['junimo-purple-happy', 'junimo-green-happy'];
    const srcSad = ['junimo-red-sad', 'junimo-white-sad'];
    let randomNumber = Math.round(Math.random() * (srcHappy.length - 1));


    let img = document.createElement('img');
    if (victory) {
        img.src = `../src/images/${srcHappy[randomNumber]}.gif`;
    } else {
        img.src = `../src/images/${srcSad[randomNumber]}.gif`;
    }
    img.width = 200

    if (victory) {
        state.imgJunimoHappyCampo.appendChild(img);
        state.imgJunimoHappyCampo.classList.add('add'); //Para debuggar
    } else {
        state.imgJunimoSadCampo.appendChild(img);
        state.imgJunimoSadCampo.classList.add('add'); //Para debuggar
    }
}

const victoryFail = (victory) => {
    if (victory) {
        if (!state.imgJunimoHappyCampo.classList.contains('add')) {
            addRandomJunimos(victory);
        }
        state.telaVitoria.classList.remove('hide');
    } else {
        if (!state.imgJunimoSadCampo.classList.contains('add')) {
            addRandomJunimos(victory);
        }
        state.telaPerda.classList.remove('hide');

    }
}


function main() {
    playAudio('Stardew Valley - Winter (The Wind Can Be Still) - OST.mp3');
    setTimer();
}

main();

// TODO -
// Timer
// Fazer uma tela de vitória
// 🆗 - Mudar o background
// 🆗 - Colocar icones personalizados