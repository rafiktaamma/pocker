import {HelloWorld , getCard} from "./services/service.js";
const jeu_id="xq9rc85o0hmk";
function test(){
    HelloWorld();
}


function drawCard(game_id){
    getCard(game_id).then(
        result => {
            console.log(result);
        }
    )
}

drawCard(jeu_id);