$(document).ready(intializeApp);


var gameplay;


function intializeApp(){
    gameplay = new Game();
    gameplay.startGame();
    $(".victory").addClass("hide");
}
