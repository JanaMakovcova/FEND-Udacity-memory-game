//array of card objects contain names of icons and if they are turn Up in game
let iconCardClass1 = '';
let iconCardElement1;
let gameOver;
let numberOfMoves = 0;
let cards = [
    {iconName: 'icon-spring', found: false},
    {iconName: 'icon-tomcat', found: false},
    {iconName: 'icon-jquery', found: false},
    {iconName: 'icon-reactjs', found: false},
    {iconName: 'icon-javascript', found: false},
    {iconName: 'icon-html5', found: false},
    {iconName: 'icon-css3', found: false},
    {iconName: 'icon-java', found: false},
    ];
//for each card from cards array this loop create new icon and appends it to new created <li>
// maked element with right class names is appended to projets flexbox

function putCards(cards){
    for (let i = 0; i < 2; i++) {

        cards.forEach(function (card) {
            const newElement = document.createElement('i');
            newElement.classList.add(card.iconName, 'number_center', 'card' + cards.indexOf(card));
            const newLiElement = document.createElement('li');
            newLiElement.classList.add('flex-item');
            newLiElement.appendChild(newElement);
            document.getElementById("projects").appendChild(newLiElement);
        });
    }
}


function afterGameOver() {
    const buttonStart = document.getElementById('start');
    const buttonOver = document.createElement('button');
    const allContent = document.getElementById('projects');
    allContent.innerHTML = '';
    const spanGameOver1 = document.createElement('p');
    spanGameOver1.textContent = 'GAME OVER';
    const spanGameOver2 = document.createElement('p');
    spanGameOver2.textContent = "Number of moves: " + numberOfMoves;
    const spanGameOver3 = document.createElement('p');
    spanGameOver3.textContent = "Time: " + value;
    buttonOver.appendChild(spanGameOver1);
    buttonOver.appendChild(spanGameOver2);
    buttonOver.appendChild(spanGameOver3);
    //buttonOver.textContent = 'GAME OVER ' + "Moves " + numberOfMoves + " time " + value;
    buttonOver.setAttribute('id', 'button-over');
    //buttonStart.parentNode.insertBefore(buttonOver,buttonStart.nextSibling);
    allContent.appendChild(buttonOver);
    stop();

    
    //allContent.appendChild(header);
    //myimg.parentNode.insertBefore(new_node,myimg.nextSibling);
}

function ifSame(clickedIcon, clickedIconElement){

    if (iconCardClass1 === '') {
        iconCardClass1 = clickedIcon;
        iconCardElement1 = clickedIconElement;
        console.log(iconCardClass1);
    }
    else {
        if (iconCardClass1 === clickedIcon) {
            console.log('jsou stejne');
            numberOfMoves = numberOfMoves + 1;
            console.log(numberOfMoves);
            //e.target.parentNode.classList.toggle('zluta');
            //document.getElementsByClassName(clickedIcon)[0].classList.toggle('zluta');
            clickedIconElement.parentNode.classList.toggle('zluta');
            iconCardElement1.parentNode.classList.toggle('zluta');
            iconCardClass1 = '';
            iconCardClass2 = '';
            //get last character of third class of icon element
            // set found for that card to true (as it is found)
            let indexOfCard = iconCardElement1.classList[2].slice(-1);
            cards[indexOfCard].found = true;
            gameOver = true;
            cards.forEach(function (card){
                if (card.found === false) {
                    gameOver = false;
                }
            })
            if (gameOver)  {
             afterGameOver();
            }
        }
        else {
            console.log('nejsou stejne');
            numberOfMoves = numberOfMoves + 1;
            console.log(numberOfMoves);
            //e.target.parentNode.classList.toggle('modra');
            //document.getElementsByClassName(clickedIcon)[0].parentNode.classList.toggle('modra');
            //document.getElementsByClassName(clickedIcon)[1].parentNode.classList.toggle('modra');
            clickedIconElement.parentNode.classList.toggle('modra');
            iconCardElement1.parentNode.classList.toggle('modra');
            iconCardClass1 = '';
            iconCardClass2 = '';
        }
    }
}

function toBlue(e){
    // e.target refers to the clicked <li> element  or <i>
    // This is different than e.currentTarget which would refer to the parent <ul> in this context
    if(e.target && (e.target.nodeName == "LI" || e.target.nodeName == "I"))
    {
        //change color of LI not I element
        if(e.target.nodeName == "LI") {
            //e.target.classList.toggle('modra');
            let clickedIcon = e.target.firstChild.classList[0];
            let clickedIconElement = e.target.firstChild;
            ifSame(clickedIcon, clickedIconElement);

        }
        else {
            //pri kliknuti primo na ikonku
            //e.target.parentNode.classList.toggle('modra');
            let clickedIcon = e.target.classList[0];
            let clickedIconElement = e.target;
            //print first class of clicked icon
            ifSame(clickedIcon, clickedIconElement);
        }
    }

}
function startGame() {
    start();
    iconCardClass1 = '';
    gameOver = false;
    numberOfMoves = 0;
    cards.forEach(function (card){
        card.found = false;
    });
    const allContent = document.getElementById('projects');
    allContent.innerHTML = '';
    const headButtonOver = document.getElementById('button-over');
    //remove buttonOver if there is one (this button appears if game is over)
    if (headButtonOver){
        headButtonOver.parentNode.removeChild(headButtonOver);
    }
    putCards(cards);
    document.getElementById("projects").addEventListener('click', toBlue, false);
}

document.getElementById('start').addEventListener('click',startGame);

function changeValue() {
    var minutes = 0;
    var seconds = ++value;
    if (value >= 60) {
        minutes = (seconds - seconds % 60)/60;
        seconds = seconds % 60;
    }
    if (seconds < 10) {
        document.getElementById("timer").innerHTML = minutes + " : 0" + seconds;
    }
    else {
        document.getElementById("timer").innerHTML = minutes + " : " + seconds;

    }
}

var timerInterval = null;

function start() {
    stop(); // stoping the previous counting (if any)
    value = 0;
    timerInterval = setInterval(changeValue, 1000);

}
var stop = function() {
    clearInterval(timerInterval);
}


