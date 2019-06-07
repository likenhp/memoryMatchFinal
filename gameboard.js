class Gameboard {
    constructor(callbacks) {
        this.cardHolder = [];
        this.tempHolder = [];
        this.logo = null;
        this.callbacks = callbacks;
    }

    renderCard() {
        let tempImages = [
            "images/ciri.mp4",
            "images/cow.mp4",
            "images/fiend.mp4",
            "images/gaunter.mp4",
            "images/geralt.mp4",
            "images/ghoul.mp4",
            "images/imperialManticore.mp4",
            "images/kingFoltest.mp4",
            "images/myrgtabrakke.mp4"];
        while (tempImages.length > 0) {
            const cardIndex = Math.floor(Math.random() * tempImages.length);
            const removedCard = tempImages.splice(cardIndex, 1);
            this.tempHolder.push(removedCard);
            const randomNum = Math.floor(tempImages.length);
            for (var secondIndex = 0; secondIndex < 2; secondIndex++) {
                const card = new Card(randomNum, this.tempHolder[0], this.callbacks);
                this.cardHolder.push(card.imageCreation());
            }
            this.tempHolder.pop();
        }
        while (this.cardHolder.length > 0) {
            const randomIndex = Math.floor(Math.random() * this.cardHolder.length);
            const removedCard = this.cardHolder.splice(randomIndex, 1);
            $(".gameArea").append(removedCard);
        }
    }

    renderLogo() {
        $(".gameLogo").css('background-image', 'url("images/mainmenubanner.png")');
    }
}