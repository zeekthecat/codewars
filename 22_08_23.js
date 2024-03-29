/*
Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

8kyu
*/

function countBy(x,n){
    let result = []
    for (let i = x; i <= n * x; i += x){
      result.push(i)
    }
    return result
}