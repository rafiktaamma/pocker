/*const Player=require("player.js");
const game=require("game.js");*/
import  {Player} from "./player.js";
import {Game} from "./game.js";

const zakaria=new Player("zakaria");
const game=await new Game([zakaria]);
console.log("Game_ID="+game.gameID);
console.log("________________________________________");
console.log("\n")

function printPlayer() {
    console.log("Player_name=" + zakaria.name);
    console.log("Player_score=" + zakaria.score);
    console.log("Player_drawed_card=" + zakaria.drawedCards);
    console.log("Player_status=" + zakaria.status);
    console.log("Player_stop_choice=" + zakaria.choice);
    console.log("________________________________________");
    console.log("\n")
}

// Starting a game
printPlayer();
await zakaria.drawCard(game.gameID);
printPlayer();
await zakaria.drawCard(game.gameID);
printPlayer();
await zakaria.drawCard(game.gameID);
printPlayer();
zakaria.setChoice(true);
console.log("the player wanna stop");
await zakaria.drawCard(game.gameID);
printPlayer()


