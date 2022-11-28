/*
In this first kata in the series, you need to define a Hero prototype to be used in a terminal game.

8kyu
*/

function Hero(name = 'Hero'){
    this.name = name
    this.position = '00'
    this.health = 100
    this.damage = 5
    this.experience = 0
  }