/*
The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

8kyu
*/

function numberToPower(number,power){
    let result = 1
    for (let i = 0; i < power; i++){
      result *= number
    }
    return result
}