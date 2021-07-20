cardsURL = 'http://deckofcardsapi.com/api/deck'

// Part 1
function partOne(){
    axios.get(`${cardsURL}/new/draw`)
        .then(response => {
            let cards = {};
            cards.suit = response.data.cards[0].suit;
            cards.value = response.data.cards[0].value;

            console.log(`${cards.value.toLowerCase()} of ${cards.suit.toLowerCase()}`)
        })
}

// Part 2
function partTwo(){
    let firstCard = null;
    let secondCard = null;
    axios.get(`${cardsURL}/new/draw`)
        .then(response => {
            firstCard = response.data.cards[0];
            let deck = response.data.deck_id;
            return axios.get(`${cardsURL}/${deck}/draw/`);
        })
        .then(response => {
            secondCard = response.data.cards[0]
            console.log(`${firstCard.value.toLowerCase()} of ${firstCard.suit.toLowerCase()}`)
            console.log(`${secondCard.value.toLowerCase()} of ${secondCard.suit.toLowerCase()}`)
        })
}

// Part 3
let deck;
let $button = $('button');
let $cardArea = $('#cardArea')

axios.get(`${cardsURL}/new/shuffle/`)
    .then(response => {
        deck = response.data.deck_id;
    })

$button.on('click', function(){
    axios.get(`${cardsURL}/${deck}/draw/`)
        .then(response => {
            console.log(response)
            let img = response.data.cards[0].image;
            let cardAngle = Math.random() * 60;
            let x = Math.random() * 40;
            let y = Math.random() * 40;

            $cardArea.append(
                $('<img>', {
                    src: img,
                    css: {transform: `translate(${x}px, ${y}px) rotate(${cardAngle}deg)`}
                }
            ));
            
            if(response.data.remaining === 0){
                $button.remove();
            }
        })
})


partOne()
partTwo()