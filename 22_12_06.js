/*
You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

8kyu
*/

let health = 100
let position = 0
let coins = 0

function main(){
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}