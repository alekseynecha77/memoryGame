
document.addEventListener('DOMContentLoaded', ()=>{


    const cardArray = [
        {
            name: 'logo',
            img: 'img/c1.jpg'
        },
        {
            name: 'logo',
            img: 'img/c1.jpg'
        },
        {
            name: 'mainCharacter',
            img: 'img/c2.jpg'
        },
        {
            name: 'mainCharacter',
            img: 'img/c2.jpg'
        },
        {
            name: 'DJ',
            img: 'img/c3.jpg'
        },
        {
            name: 'DJ',
            img: 'img/c3.jpg'
        },
        {
            name: 'bike',
            img: 'img/c4.jpg'
        },
        {
            name: 'bike',
            img: 'img/c4.jpg'
        },
        {
            name: 'cyPunk',
            img: 'img/c5.jpg'
        },
        {
            name: 'cyPunk',
            img: 'img/c5.jpg'
        },
        {
            name: 'team',
            img: 'img/c6.jpg'
        },
        {
            name: 'team',
            img: 'img/c6.jpg'
        }
    ]        


cardArray.sort(()=> 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen =[];
 var cardsChosenId =[];
 var cardsWon =[];



function createBoard(){

    for(let i =0; i< cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src', 'img/blank.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild(card);
    }
}

//Check for matches
function checkforMatch(){

    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId= cardsChosenId[1];

    if(cardsChosen[0] === cardsChosen[1]){
        alert('you found a match');
        cards[optionOneId].setAttribute('src', 'img/white.png');
        cards[optionTwoId].setAttribute('src', 'img/white.png');
        cardsWon.push(cardsChosen);
 
        }else{
        cards[optionOneId].setAttribute('src', 'img/blank.jpg');
        cards[optionTwoId].setAttribute('src', 'img/blank.jpg');
        alert('sorry try again');
    }
    cardsChosen=[];
    cardsChosenId=[];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'congrats you got all the matches correct';
    }

}
//flip your card
function flipCard(){

    var cardId = this.getAttribute('data-id');

    cardArray.forEach((object) => {
        cardsChosen.push(object);



    })
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length ===2 ){
        setTimeout(checkforMatch, 500)
    }
    

}

console.log(cardsChosen);





createBoard();
    





})






// const clickMe = document.querySelector('.listImg img');
// console.log(clickMe);


// clickMe.addEventListener('click', ()=>{



// })