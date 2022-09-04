/*
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

8kyu
*/

function remainder(n,m){
    if (n > m){
      return n % m
    } else if (n < m){
      return m % n
    } else if (n < 0){
      return (n % m + m) % m
    } else {
      return NaN
    }
}