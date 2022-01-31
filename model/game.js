import {getNewDeckID, getCard} from "../services/service.js";
export class Game {
      constructor(players) {
        this.players = players;
          return (async () => {

              // await anything you want
              this.gameID=await getNewDeckID();

              return this; // Return the newly-created instance
          })();
    }

    startGame(){}


}
