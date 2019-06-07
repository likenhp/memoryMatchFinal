class Card {
    constructor(number, cardUrl, callbacks) {
        this.images = [];
        this.sprite = null;
        this.back = null;
        this.cardHref = number;
        this.frontCard = cardUrl;
        this.cardContainer = null;
        this.theCard = null;
        this.callbacks = callbacks;
        this.cardClicked = this.cardClicked.bind(this);
    }

    imageCreation() {
        this.sprite = $("<video/>", {
            id: "video",
            src: this.frontCard,
            type: "video/mp4",
            controls: false,
            autoplay: true,
            loop: true
        }).addClass("frontcard").attr("href", `${this.cardHref}`);
        this.back = $("<img>").attr(
            "src", "images/backofcard.jpg"
        ).addClass("backcard");
        this.cardContainer = $("<div>").addClass("cardContainer").on("click", this.cardClicked);
        this.theCard = $("<div>").addClass("cardWithinACard");
        this.theCard.append(this.sprite, this.back);
        this.cardContainer.append(this.theCard);
        return this.cardContainer;
    }

    cardClicked() {
        this.callbacks.cardClick(event.currentTarget);
    }
}


