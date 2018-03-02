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
cards.forEach(function(card){
    const newElement = document.createElement('i');
    newElement.classList.add (card.iconName ,'number_center');
    const newLiElement = document.createElement('li');
    newLiElement.classList.add('flex-item');
    newLiElement.appendChild(newElement);
    document.getElementById("projects").appendChild(newLiElement);
});


function toBlue(e){
    // e.target refers to the clicked <li> element  or <i>
    // This is different than e.currentTarget which would refer to the parent <ul> in this context
    if(e.target && (e.target.nodeName == "LI" || e.target.nodeName == "I")) {
        //change color of LI not I element
        if(e.target.nodeName == "LI")
              e.target.classList.toggle('modra');
        else e.target.parentNode.classList.toggle('modra');
         }

}

document.getElementById("projects").addEventListener('click', toBlue, false);

