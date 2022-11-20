/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

7kyu
*/

function getDivisorsCnt(n){
    return n > 1 ? [...Array(n)].map((e,i) => i).filter(x => n % x == 0).length + 1 : 1
  }