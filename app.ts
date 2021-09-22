import { Game } from "./src/game";

function main(): void {
  console.log("Welcome to T20 Game");
  const game = new Game();
  game.startGame();
}

main();
