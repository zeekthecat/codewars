// Given a non-empty array of integers, return the result of multiplying the values together in order.
// 8 kyu

function grow(x){
    let sum = 1
    for (let i = 0; i < x.length; i++){
      sum = sum * x[i]
    }
    return sum
  }