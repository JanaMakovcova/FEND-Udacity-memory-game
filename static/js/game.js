//array of card objects contain
// names of icons and
// if they are turn Up in game and
// if they are found already
let iconCardClass1 = '';
let iconCardElement1;
let iconCardClass2 = '';
let iconCardElement2;
let gameOver;
let numberOfMoves = 0;
let cards = [
    {iconName: 'icon-spring', found: false, turnUp: false, number: "card0"},
    {iconName: 'icon-tomcat', found: false, turnUp: false, number: "card1"},
    {iconName: 'icon-jquery', found: false, turnUp: false, number: "card2"},
    {iconName: 'icon-reactjs', found: false, turnUp: false, number: "card3"},
    {iconName: 'icon-javascript', found: false, turnUp: false, number: "card4"},
    {iconName: 'icon-html5', found: false, turnUp: false, number: "card5"},
    {iconName: 'icon-css3', found: false, turnUp: false, number: "card6"},
    {iconName: 'icon-java', found: false, turnUp: false, number: "card7"},
    {iconName: 'icon-spring', found: false, turnUp: false, number: "card8"},
    {iconName: 'icon-tomcat', found: false, turnUp: false, number: "card9"},
    {iconName: 'icon-jquery', found: false, turnUp: false, number: "card10"},
    {iconName: 'icon-reactjs', found: false, turnUp: false, number: "card11"},
    {iconName: 'icon-javascript', found: false, turnUp: false, number: "card12"},
    {iconName: 'icon-html5', found: false, turnUp: false, number: "card13"},
    {iconName: 'icon-css3', found: false, turnUp: false, number: "card14"},
    {iconName: 'icon-java', found: false, turnUp: false, number: "card15"}
    ];
//for each card from cards array this loop create new icon and appends it to new created <li>
// maked element with right class names is appended to game-board flexbox



function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function starsBegin (){
    const newElement1 = document.createElement('i');
    newElement1.classList.add('fas','fa-star');
    const newElement2 = document.createElement('i');
    newElement2.classList.add('fas','fa-star');
    const newElement3 = document.createElement('i');
    newElement3.classList.add('fas','fa-star');
    document.getElementById('stars').appendChild(newElement1);
    document.getElementById('stars').appendChild(newElement2);
    document.getElementById('stars').appendChild(newElement3);
}
function removeStar(){
    const stars = document.getElementById('stars');
    if (stars.lastElementChild) {
        stars.lastElementChild.parentNode.removeChild(stars.lastElementChild);
    }
}
function removeAllStars(){
    const stars = document.getElementById('stars');
    for (let i = 0; i < 3; i++){
        if (stars.lastElementChild) {
            stars.lastElementChild.parentNode.removeChild(stars.lastElementChild);
        }
    }

}

function putCards(cards){
    //for (let i = 0; i < 2; i++) {

        cards.forEach(function (card) {
            const newElement = document.createElement('i');
            newElement.classList.add(card.iconName, 'number_center', card.number);
            const newLiElement = document.createElement('li');
            newLiElement.classList.add('flex-item', 'modra');
            newLiElement.appendChild(newElement);
            document.getElementById("game-board").appendChild(newLiElement);
        });
    //}
}
function getTimeString(value){
    let minutes = 0;
    let seconds = value;
    if (value >= 60) {
        minutes = (seconds - seconds % 60)/60;
        seconds = seconds % 60;
    }
    if (seconds < 10) {
        let stringOfTime = minutes + " : 0" + seconds;
        return stringOfTime;
    }
    else {
        let stringOfTime = minutes + " : " + seconds;
        return stringOfTime;

    }
}

function afterGameOver() {
    const buttonStart = document.getElementById('start');
    const buttonOver = document.createElement('button');
    const divOver = document.createElement('div');
    divOver.setAttribute('id', 'modal-inner');
    buttonOver.appendChild(divOver);
    const head = document.getElementById('head');

    const allContent = document.getElementById('game-board');
    //allContent.innerHTML = '';
    const spanGameOver1 = document.createElement('p');
    spanGameOver1.textContent = 'GAME OVER';
    const spanGameOver2 = document.createElement('p');
    spanGameOver2.textContent = "Number of moves: " + numberOfMoves;
    const spanGameOver3 = document.createElement('p');
    const buttonOk = document.createElement('button');
    buttonOk.textContent = 'OK';
     //count minutes and seconds from value
    spanGameOver3.textContent = "Time: " + getTimeString(value);
    divOver.appendChild(spanGameOver1);
    divOver.appendChild(spanGameOver2);
    divOver.appendChild(spanGameOver3);
    divOver.appendChild(buttonOk);
    buttonOver.setAttribute('id', 'button-over');
    //buttonStart.parentNode.insertBefore(buttonOver,buttonStart.nextSibling);
    allContent.appendChild(buttonOver);
    buttonOver.style.display = "block";
    stop();


    // When the user clicks anywhere outside of popup, close it
    window.onclick = function(event) {
        if (event.target == buttonOver) {
            buttonOver.style.display = "none";
        }
    };
    buttonOk.onclick = function(event) {
        if (event.target == buttonOk) {
            buttonOver.style.display = "none";
        }
    };

}

function ifSame(clickedIcon, clickedIconElement){

    if (iconCardClass1 === '') {
        iconCardClass1 = clickedIcon;
        iconCardElement1 = clickedIconElement;
        console.log('prazdny prvni');
    } else if (iconCardClass2 === '') {
            iconCardClass2 = clickedIcon;
            iconCardElement2 = clickedIconElement;
            console.log('prazdny druhy');
           //this will done only if iconCardClass1 or iconCardClass2 is ''
            if (iconCardClass1 === iconCardClass2) {
            //same cards
            numberOfMoves = numberOfMoves + 1;
            const buttonMoves = document.getElementById('moves');
            buttonMoves.textContent = numberOfMoves;
            if (numberOfMoves === 12) {
                removeStar();
            }
            if (numberOfMoves === 20) {
                    removeStar();
            }

            iconCardElement2.parentNode.classList.toggle('zluta');
            iconCardElement1.parentNode.classList.toggle('zluta');

            //get last character of third class of icon element
            // set found for that card to true (as it is found)
            //let indexOfCard1 = iconCardElement1.classList[2].slice(-1);
            //let indexOfCard2 = clickedIconElement.classList[2].slice(-1);

                let indexOfCard1 = 0;
                cards.forEach(function (card){
                    if (card.number === iconCardElement1.classList[2]) {
                        indexOfCard1 = cards.indexOf(card);
                    }
                });
                let indexOfCard2 = 0;
                cards.forEach(function (card){
                    if (card.number === iconCardElement2.classList[2]) {
                        indexOfCard2 = cards.indexOf(card);
                    }
                });

            cards[indexOfCard1].found = true;
            cards[indexOfCard2].found = true;
            gameOver = true;
            cards.forEach(function (card){
                if (card.found === false) {
                    gameOver = false;
                }
            });
            if (gameOver) {
             afterGameOver();
            }
                iconCardClass1 = '';
                iconCardClass2 = '';

        } else {
            // not same cards
            numberOfMoves = numberOfMoves + 1;
            const buttonMoves = document.getElementById('moves');
            buttonMoves.textContent = numberOfMoves;
                if (numberOfMoves === 12) {
                    removeStar();
                }
                if (numberOfMoves === 20) {
                    removeStar();
                }

                let indexOfCard1 = 0;
                cards.forEach(function (card){
                    if (card.number === iconCardElement1.classList[2]) {
                        indexOfCard1 = cards.indexOf(card);
                    }
                });
                let indexOfCard2 = 0;
                cards.forEach(function (card){
                    if (card.number === iconCardElement2.classList[2]) {
                        indexOfCard2 = cards.indexOf(card);
                    }
                });
                cards[indexOfCard1].turnUp = true;
                cards[indexOfCard2].turnUp = true;
            setTimeout(turnBack, 1000);
            function turnBack(){
                iconCardElement2.parentNode.classList.toggle('modra');
                iconCardElement1.parentNode.classList.toggle('modra');




                //let indexOfCard1 = iconCardElement1.classList[2].slice(-1);
                cards[indexOfCard1].turnUp = false;
                //let indexOfCard2 = clickedIconElement.classList[2].slice(-1);
                cards[indexOfCard2].turnUp = false;
                iconCardClass1 = '';
                iconCardClass2 = '';
            }

        }
    }
    
}

function onClickCard(e){
    // e.target refers to the clicked <li> element  or <i>
    if(e.target && (e.target.nodeName == "LI" || e.target.nodeName == "I")) {
        //change color of LI not I element
        if(e.target.nodeName == "LI") {
            let clickedIcon = e.target.firstChild.classList[0];
            let clickedIconElement = e.target.firstChild;

            //let indexOfCard = clickedIconElement.classList[2].slice(-1);
            let indexOfCard = 0;
            console.log(cards);
            console.log(clickedIconElement.classList[2]);

            cards.forEach(function (card){
                if (card.number === clickedIconElement.classList[2]) {
                  indexOfCard = cards.indexOf(card);
            }
            });

            if ((!cards[indexOfCard].turnUp) && ((iconCardClass1 === '')||(iconCardClass2 === ''))){
                console.log(iconCardClass1 + 'x', iconCardClass2 + 'y');
                clickedIconElement.parentNode.classList.toggle('modra');
                cards[indexOfCard].turnUp = true;
                ifSame(clickedIcon, clickedIconElement);
                console.log(indexOfCard);
            }

        }
        else {
            //if icon is clicked
            let clickedIcon = e.target.classList[0];
            let clickedIconElement = e.target;
            //print first class of clicked icon
            //let indexOfCard = clickedIconElement.classList[2].slice(-1);

            let indexOfCard = 0;
            console.log(cards);
            console.log(clickedIconElement.classList[2]);

            cards.forEach(function (card){
                if (card.number === clickedIconElement.classList[2]) {
                    indexOfCard = cards.indexOf(card);
                }
            });

            if ((!cards[indexOfCard].turnUp) && ((iconCardClass1 === '')||(iconCardClass2 === ''))){
                console.log(iconCardClass1 + 'x', iconCardClass2 + 'y');
                clickedIconElement.parentNode.classList.toggle('modra');
                cards[indexOfCard].turnUp = true;
                ifSame(clickedIcon, clickedIconElement);
            }
            console.log(indexOfCard);
        }
    }

}
function startGame() {
    //start timer
    removeAllStars();
    starsBegin();
    start();
    iconCardClass1 = '';
    iconCardClass2 = '';
    gameOver = false;
    numberOfMoves = 0;
    const buttonMoves = document.getElementById('moves');
    buttonMoves.textContent = numberOfMoves;
    // non of cards is found
    cards.forEach(function (card){
        card.found = false;
        card.turnUp = false;
    });
    //clean game-board
    const allContent = document.getElementById('game-board');
    allContent.innerHTML = '';
    const headButtonOver = document.getElementById('button-over');
    //remove buttonOver if there is one (this button appears if game is over)
    if (headButtonOver){
        headButtonOver.parentNode.removeChild(headButtonOver);
    }
    //put cards on game-board
    shuffleArray(cards);
    putCards(cards);
    document.getElementById("game-board").addEventListener('click', onClickCard, false);
}
 //add listener on <ul> element with cards
document.getElementById('start').addEventListener('click',startGame);

function changeValue() {
         ++value;
         //show timer
        document.getElementById("timer").innerHTML = getTimeString(value);
}

//timer for game
let timerInterval = null;

function start() {
    stop(); // stoping the previous counting (if any)
    value = 0;
    timerInterval = setInterval(changeValue, 1000);

}
function stop() {
    clearInterval(timerInterval);
}


