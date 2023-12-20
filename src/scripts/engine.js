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
let shuffleAldeoes = aldeoes.sort(()=> (Math.random() > 0.5 ? 2 : -1));


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
    } else{
        openCards[0].classList.remove('boxOpen');
        openCards[1].classList.remove('boxOpen');
    }
    openCards = [];


    // Mostra mensagem de vitória
    if (document.querySelectorAll('.boxMatch').length === aldeoes.length) {
        alert('U win!')
    }
}

function main() {
    const audio = new Audio('./src/audio/Stardew Valley - Winter (The Wind Can Be Still) - OST.mp3');
    audio.volume = 0.5;
    audio.play
}


// TODO - 
// Timer
// Mudar o background
// Colocar icones personalizados