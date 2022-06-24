/*
Given an integral number, determine if it's a square number.

7kyu
*/

function isSquare(n){
    return Math.sqrt(n) % 1 == 0
}