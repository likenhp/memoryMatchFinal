class Gameboard{
    constructor(){
        this.cardHolder = [];

        this.matches = 0;
        this.attempts = 0;
        this.accuracy = 0;
        this.gamesPlayed = 0;
        this.displayStats = 0;
        this.resetStats = 0;
    }

    renderCard(){
        for(var index=0; index< 9; index++){
            const randomNum = Math.floor(Math.random()*649);
            for(var secondIndex = 0; secondIndex < 2; secondIndex++ ){
                const card = new Card(randomNum);
                card.callCard();
                const cardContainer = $("<div>").addClass("cardContainer");
                const theCard = $("<div>").addClass("cardWithinACard");
                theCard.append(card.sprite, card.back);
                cardContainer.append(theCard);
                this.cardHolder.push(cardContainer);
            }
        }
        while(this.cardHolder.length>0){
            const randomIndex = Math.floor(Math.random()*this.cardHolder.length);
            const removedCard = this.cardHolder.splice(randomIndex, 1);
            $(".gameArea").append(removedCard);
        }
    }


}