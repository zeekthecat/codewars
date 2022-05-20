/*
Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.
You need to return the nth triangular number. You should return 0 for out of range values:
For example: (Input --> Output)

7kyu
*/

function triangular(n){
    if (n > 0){
      return n * (n + 1) / 2
    } else {
      return 0
    }
}