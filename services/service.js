import { Headers} from 'node-fetch';
import fetch from 'node-fetch';

const meta = {
    'Content-Type': 'text/json'
};
const headers = new Headers(meta);


export async function getNewDeckID(){
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',{
        headers : headers
    });
    const data = await response.json();
    return data.deck_id;
}


export async function getCard(deckID){
    const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`;
    const response = await fetch(url);
    return await response.json();
}


export function convert(value){
    console.log("type of value="+typeof value);
    if (value == "ACE"){
        console.log("l AS")
        return 0;
    } else
    if((value == "KING") || (value == "QUEEN") || (value == "JACK") )
   /* if (value in ['KING','QUEEN','JACK'])*/
    {
        console.log("le roi, la reine et vallet")
        return 10;
    }
    else {
        console.log("test test test")
        return parseInt(value,10);
    }
}

export function HelloWorld(){
    console.log("hello world");
    return 0;
}

/*module.exports = {
    getCard,
    getNewDeckID,
    HelloWorld
}
*/