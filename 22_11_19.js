/*
Create a Function that takes one parameter and returns its square root rounded to 5 decimal places. You are not allowed to use the Math.sqrt() or the Math.pow() methods.

7kyu
*/

function squareRoot(x){
    let y = x
    let z = (y + (x / y)) / 2
    while (Math.abs(y - z) >= 0.00001){
      y = z
      z = (y + (x / y))/2
    }
    return parseFloat(z.toFixed(5))
  }