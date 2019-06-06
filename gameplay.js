class Game{
    constructor(){
        this.firstClickfront = null;
        this.secondClickfront = null;
        this.firstClickback = null;
        this.secondClickback = null;
        this.gameboard = null;

        this.canClick = true;

        this.cardClick = this.cardClick.bind(this);
        this.timeOut = this.timeOut.bind(this);
    }

    addEventListener(){
        
    }

    cardClick(card){
        const front = $(card);
        const back = $(card).find(".cardWithinACard");

        if(!this.canClick){
            return;
        }

        if(this.firstClickfront === null){
            this.firstClickback = back;
            this.firstClickback.addClass("onClick");
            console.log(this.firstClickback)
            $(card).addClass("noClick");
            this.firstClickfront = front;
            return this.firstClickfront;

        }else if(this.firstClickfront !== null){
            this.secondClickback = back;
            this.secondClickback.addClass("onClick");
            $(card).addClass("noClick");
            this.secondClickfront = front;
            this.canClick = false;

            if(this.firstClickfront.find(".frontcard").attr("href") === this.secondClickfront.find(".frontcard").attr("href")){
                this.firstClick = null;
                this.secondClick = null;
                this.firstClickback = null;
                this.secondClickback = null;
                this.canClick = true;
            }else if(this.firstClickfront.find(".frontcard").attr("href") !== this.secondClickfront.find(".frontcard").attr("href")){
                console.log(this.firstClickfront);
                setTimeout(this.timeOut, 1500);
                this.canClick = true;
            }
        }
    }

    timeOut(){
        this.firstClickfront.removeClass("noClick");
        this.secondClickfront.removeClass("noClick");
        this.firstClickback.removeClass("onClick");
        this.secondClickback.removeClass("onClick");
        this.firstClickfront = null;
        this.secondClickfront = null;
        this.firstClickback = null;
        this.secondClickback = null;
    }

    startGame(){
        this.gameboard = new Gameboard({
            cardClick: this.cardClick
        });
        this.gameboard.renderCard();
        this.gameboard.renderLogo();
    }

}