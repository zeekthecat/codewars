/*
Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

7kyu
*/

function sequenceSum(begin,end,step){
    let sumArray = []
    for (let i = begin; i <= end; i += step){
      sumArray.push(i)
    }
    return sumArray.reduce((a,b) => a + b, 0)
  }