/*
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

8 kyu
*/

function isDivisible(n,x,y){
    return n % y == 0 && n % x == 0
}