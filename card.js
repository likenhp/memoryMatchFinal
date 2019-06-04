class Card{
    constructor(number){
        this.images = [];
        this.pokemon = number;
        this.sprite = null;
        this.back = null;
    }

    imageCreation(){
        const col = this.pokemon % 31;
        const row = Math.floor(this.pokemon/31);
        this.sprite=$("<div>").css({
            background: `url("images/black-white3x.png") calc((${col}*288%)/8640*100) calc((${row}*288%)/5760*100) / 3100% 2100%`
        }).addClass("frontcard").attr("href", `${this.pokemon}`);
    }

    backCard(){
        this.back = $("<img>").attr(
            "src","images/BW_Grass_Su288px.png"
        ).addClass("backcard");
    }

    callCard(){
        this.imageCreation();
        this.backCard();
    }
}


