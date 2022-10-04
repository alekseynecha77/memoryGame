
//creating card Array
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

//sorting card array so each time
// user refresh page images will go in random positions
cardArray.sort(()=> 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen =[];
 var cardsChosenId =[];
 var cardsWon =[];


//create board of cards with images from array
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
//setting if two cards are the same, 0 and 1
//the alert you found match and the cards will appear to be white
//if not gradient blank appear
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
    //if you predict all the images the textcontent will say congrats
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'congrats you got all the matches correct';
    }

}
//flip your card
function flipCard(){

//create var that will get attribute of data-id
//then push card chosen and card chosen id
        var cardId = this.getAttribute('data-id');

        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);


 

//then we will set attribute so data -id will appear as car img
//then we will check if we pick two cards then it will check for match
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2 ){
            setTimeout(checkforMatch, 500)
        }
        

  

}


//createboard
createBoard();
    









// const clickMe = document.querySelector('.listImg img');
// console.log(clickMe);


// clickMe.addEventListener('click', ()=>{



// })