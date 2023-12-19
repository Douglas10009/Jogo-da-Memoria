// Todos os emojis selecionados
const emojis = [
    "💴",
    "💴",
    "🤑",
    "🤑",
    "😶‍🌫️",
    "😶‍🌫️",
    "😭",
    "😭",
    "🥸",
    "🥸",
    "😾",
    "😾",
    "👩‍🌾",
    "👩‍🌾",
    "🕺",
    "🕺",
];
// Emojis abertos
let openCards = [];

// Permite sortear baseado em uma função (Melhor forma de aleatorizar, 2 elemeentos com o mesmo valor e o pc que decide como vai organizar)
let shuffleEmojis = emojis.sort(()=> (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffleEmojis[i];

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
    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
        alert('U win!')
    }
}


// TODO - 
// Timer
// Mudar o background
// Colocar icones personalizados