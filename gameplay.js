class Game {
    constructor() {
        this.firstClickFront = null;
        this.secondClickFront = null;
        this.firstClickBack = null;
        this.secondClickBack = null;
        this.gameboard = null;
        this.canClick = true;
        this.totalPossibleMatches = 9;
        this.matchCounter = 0;
        this.matches = 0;
        this.attempts = 0;
        this.accuracy = 0;
        this.gamesPlayed = 0;
        this.displayStats = 0;
        this.cardClick = this.cardClick.bind(this);
        this.congratulations = this.congratulations.bind(this);
        this.timeOut = this.timeOut.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.newGamePlus = this.newGamePlus.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
    }

    addEventListener() {
        $(".reset").on("click", this.resetGame);
        $(".beginAgain").on("click", this.newGamePlus);
        $(".gameLogo").on("click", this.refreshPage);
    }

    cardClick(card) {
        const front = $(card);
        const back = $(card).find(".cardWithinACard");
        if (!this.canClick) {
            return;
        }
        if (this.firstClickFront === null) {
            this.firstClickBack = back;
            this.firstClickBack.addClass("onClick");
            $(card).addClass("noClick");
            this.firstClickFront = front;
            return this.firstClickFront;
        } else if (this.firstClickFront !== null) {
            this.canClick = false;
            this.secondClickBack = back;
            this.secondClickBack.addClass("onClick");
            $(card).addClass("noClick");
            this.secondClickFront = front;
            this.attempts++;
            if (this.firstClickFront.find(".frontcard").attr("href") === this.secondClickFront.find(".frontcard").attr("href")) {
                this.firstClickFront = null;
                this.secondClickFront = null;
                this.firstClickBack = null;
                this.secondClickBack = null;
                this.canClick = true;
                this.matchCounter++;
                this.matches++;
                if (this.matches === this.totalPossibleMatches) {
                    setTimeout(this.congratulations, 500)
                }
            } else if (this.firstClickFront.find(".frontcard").attr("href") !== this.secondClickFront.find(".frontcard").attr("href")) {
                setTimeout(this.timeOut, 1500);
            }
            this.accuracy = this.matches / this.attempts;
            this.renderStats();
        }
    }

    resetStats() {
        this.matches = 0;
        this.attempts = 0;
        this.accuracy = 0;
        this.renderStats();
    }

    resetGame() {
        if(this.attempts === 0){
            this.resetStats();
            this.firstClickFront = null;
            this.secondClickFront = null;
            this.firstClickBack = null;
            this.secondClickBack = null;
            $(".gameArea").empty();
            this.gameboard.renderCard();
        }else{
            this.gamesPlayed++;
            this.resetStats();
            this.firstClickFront = null;
            this.secondClickFront = null;
            this.firstClickBack = null;
            this.secondClickBack = null;
            $(".gameArea").empty();
            this.gameboard.renderCard();
        }
        
    }

    newGamePlus() {
        $(".victory").addClass("hide");
        $(".game").removeClass("hide").addClass("fadeIn").addClass("animate");
        this.resetGame();
    }

    timeOut() {
        this.firstClickFront.removeClass("noClick");
        this.secondClickFront.removeClass("noClick");
        this.firstClickBack.removeClass("onClick");
        this.secondClickBack.removeClass("onClick");
        this.firstClickFront = null;
        this.secondClickFront = null;
        this.firstClickBack = null;
        this.secondClickBack = null;
        this.canClick = true;
    }

    startGame() {
        this.gameboard = new Gameboard({
            cardClick: this.cardClick,
        });
        this.gameboard.renderCard();
        this.gameboard.renderLogo();
        this.renderStats();
        this.addEventListener();
    }

    renderStats() {
        $(".games-played > .value").text(this.gamesPlayed);
        $(".attempts > .value").text(this.attempts);
        const accuracyValue = (this.accuracy * 100).toFixed(2) + "%";
        $(".accuracy > .value").text(accuracyValue);
    }

    refreshPage(){
        window.location.reload();
    }

    congratulations() {
        $(".game").addClass("hide");
        $(".victory").removeClass("hide");
    }
}