/*
Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

7kyu
*/

function getSumOfDigits(integer){
    return integer.toString().split('').map(Number).reduce((a,b) => a + b, 0)
  }