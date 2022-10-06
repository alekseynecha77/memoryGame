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

var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

//create board of cards func with images from array
function createBoard(){

 //for loop with cardArray

for(let i = 0; i< cardArray.length; i++){
 var card = document.createElement('img');
 card.setAttribute('src', 'img/blank.jpg');
 card.setAttribute('data-id', i);
 card.addEventListener('click', flipCard);
 grid.appendChild(card);

}

 //addeventlisthener on flipcard



//create const card that will createElement img which will become board
//set attribute that will hide images


 //setting attr data id to i in for loop


 //appending card to grid


//}
}

function checkForMatches(){

 var cards = document.querySelectorAll('img');
 const optionOne = cardsChosenId[0];
 const optionTwo = cardsChosenId[1];
if(cardsChosen[0] === cardsChosen[1]){
 alert('you found a match');
 cards[optionOne].setAttribute('src', 'img/white.png');
 cards[optionTwo].setAttribute('src', 'img//white.png');
 cardsWon.push(cardsChosen);
}else{

 cards[optionOne].setAttribute('src', 'img/blank.jpg');
 cards[optionTwo].setAttribute('src', 'img/blank.jpg');
 alert('sorry try again');
}
cardsChosen = [];
cardsChosenId = [];

resultDisplay.textContent = cardsWon.length;
if(cardsWon.length === cardArray.length/2){
    resultDisplay.textContent = 'congrats';
}
}
//Check for matches
 //create cards variable
 //creating two const option id 1 and 2

//setting if two chosen cards are the same, if yes we will replace images to white blank
// we then set cards  to option one and two wich are images we created for board
//the alert you found match and the cards will appear to be white
//if not gradient blank appear
//we then push what we set in if statements to cardswon array t




//if you predict all the images the textcontent will say congrats


//}
// }


//flip your card func

function flipCard(){


 var cardId = this.getAttribute('data-id');

 cardsChosen.push(cardArray[cardId].name);
 cardsChosenId.push(cardId);

 this.setAttribute('src', cardArray[cardId].img);
 if(cardsChosen.length === 2){
 setTimeout(checkForMatches, 500);
}

}
createBoard();


//    Element.setAttribute() Sets the value of an attribute on the specified element

//    getAttribute() The getAttribute() method of the Element interface returns the value of a specified attribute on the element.


//create var that will get attribute of data-id
//then push card chosen and card chosen id



//then we will set attribute so data -id will appear as card id img
//then we will check if cardsChosen.length === 2 then it will check for match
//setting timeout check with matches, 500

//}


