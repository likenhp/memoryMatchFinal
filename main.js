$(document).ready(intializeApp);

var game;
var gameplay;


function intializeApp(){
    game = new Gameboard();
    game.renderCard();
    gameplay = new Game();
    gameplay.addEventListener();
}
