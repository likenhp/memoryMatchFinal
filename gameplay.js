class Game{
    constructor(){
        this.firstClick = null;
        this.secondClick = null;

        this.canClick = true;

        this.cardClick = this.cardClick.bind(this);

    }

    addEventListener(){
        $(".cardWithinACard").on("click", this.cardClick);
    }

    cardClick(){
        debugger;
        const back = $(event.currentTarget).find("> .backcard");
        const front =$(event.currentTarget).find("> .frontcard").attr("href");

        if(!this.canClick){
            return;
        }

        if(this.firstClick === null){
            back.addClass("hide");
            this.firstClick = front;

            return this.firstClick;
        }else if(this.firstClick !== null){
            back.addClass("hide");
            this.secondClick = front;
            this.canClick = false;
            return this.secondClick;
        }
        
        
        ;
    }

}