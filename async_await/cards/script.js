cardsURL = 'http://deckofcardsapi.com/api/deck'

// Part 1
async function partOne(){
    let deck = await axios.get(`${cardsURL}/new/shuffle/`);
    let deckId = deck.data.deck_id;

    let card = await axios.get(`${cardsURL}/${deckId}/draw/`);
    let string = `${card.data.cards[0].value.toLowerCase()} of ${card.data.cards[0].suit.toLowerCase()}`

    console.log(string)
}

// Part 2
async function partTwo(){
    let deck = await axios.get(`${cardsURL}/new/shuffle/`);
    let deckId = deck.data.deck_id;

    let card1 = await axios.get(`${cardsURL}/${deckId}/draw/`)
    let card2 = await axios.get(`${cardsURL}/${deckId}/draw/`)

    let string1 = `${card1.data.cards[0].value.toLowerCase()} of ${card1.data.cards[0].suit.toLowerCase()}`
    let string2 = `${card2.data.cards[0].value.toLowerCase()} of ${card2.data.cards[0].suit.toLowerCase()}`

    console.log(string1)
    console.log(string2)
}

// Part 3  
async function partThree(){
    let $button = $('button');
    let $cardArea = $('#cardArea');

    let deck = await axios.get(`${cardsURL}/new/shuffle`)

    $button.show().on('click', async function(){
        let card = await axios.get(`${cardsURL}/${deck.data.deck_id}/draw/`);
        let img = card.data.cards[0].image;
        let angle = Math.random() * 60;
        let x = Math.random() * 40;
        let y = Math.random() * 40;

        $cardArea.append($('<img>', {
            src: img,
            css: {
                transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`
            }
        }))

        if(card.data.remaining === 0){
            $button.remove();
        }
    })
}

partOne()
partTwo()
partThree()