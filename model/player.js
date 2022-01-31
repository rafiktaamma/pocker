import {getNewDeckID, getCard, convert} from '../services/service.js'

// DIFFRENTE STATUS OF PLAYER
/*const WINNER = 0;
const LOSER = 1;
const PLAYING = 3;*/
export class Player {

    constructor(name) {
        this.name = name;
        this.choice = false;
        this.drawedCards = [];
        this.score = 0;
        this.status = "PLAYING";
    }
    setChoice(choice){
        this.choice = choice;
    }

    async drawCard(gameId){
        if (this.status === 'PLAYING'){
            await getCard(gameId).then(
                data => {
                    console.log(data)
                    if (data.success){
                        const textCard =  data.cards[0].value;
                        console.log("value="+textCard)
                        this.drawedCards.push(textCard);
                        // todo get card image
                        console.log("convert(textCard)="+convert(textCard));
                        this.score += convert(textCard);
                        if (this.choice === false){
                            if (this.score > 21){
                                this.status = 'LOSER';
                            }else if(this.score === 21) {
                                this.status = 'WINNER';
                            }
                        }else {
                            if (this.score > 21){
                                this.status = "WINNER";
                            } else {
                                this.status = "LOSER";
                            }
                        }
                    }
                }
            )



        }
    }
}

