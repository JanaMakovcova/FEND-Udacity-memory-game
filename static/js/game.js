//array of card objects contain names of icons and if they are turn Up in game
var cards = [
    {iconName: 'icon-spring', turnUp: true},
    {iconName: 'icon-tomcat', turnUp: true},
    {iconName: 'icon-jquery', turnUp: true},
    {iconName: 'icon-reactjs', turnUp: true},
    {iconName: 'icon-javascript', turnUp: true},
    {iconName: 'icon-html5', turnUp: true},
    {iconName: 'icon-css3', turnUp: true},
    {iconName: 'icon-java', turnUp: true},
    {iconName: 'icon-mongodb', turnUp: true}
    ];
//for each card from cards array this loop create new icon and appends it to new created <li>
// maked element with right class names is appended to projets flexbox


for (let i = 0; i < 2; i++) {

    cards.forEach(function (card) {
        const newElement = document.createElement('i');
        newElement.classList.add(card.iconName, 'number_center');
        const newLiElement = document.createElement('li');
        newLiElement.classList.add('flex-item');
        newLiElement.appendChild(newElement);
        document.getElementById("projects").appendChild(newLiElement);
    });
}
function turnCard(card) {
    
}
let iconCardClass1 = '';
let iconCardClass2 = '';
let iconCardElement1;

function ifSame(clickedIcon, clickedIconElement){

    if (iconCardClass1 === '') {
        iconCardClass1 = clickedIcon;
        iconCardElement1 = clickedIconElement;
        console.log(iconCardClass1);
    }
    else {
        if (iconCardClass1 === clickedIcon) {
            console.log('jsou stejne');
            //e.target.parentNode.classList.toggle('zluta');
            //document.getElementsByClassName(clickedIcon)[0].classList.toggle('zluta');
            clickedIconElement.parentNode.classList.toggle('zluta');
            iconCardElement1.parentNode.classList.toggle('zluta');
            iconCardClass1 = '';
            iconCardClass2 = '';
        }
        else {
            console.log('nejsou stejne');
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

document.getElementById("projects").addEventListener('click', toBlue, false);


