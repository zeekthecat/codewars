/*
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers.

8kyu
*/

function multiply(number){
    if (number >= 0){
      return number * Math.pow(5, number.toString().length)
    } else if (number <= -0){
      return number * Math.pow(5, number.toString().length - 1)
    }
}