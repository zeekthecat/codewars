/*
Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

8kyu
*/

function generateRange(min,max,step){
    let result = []
    for (let i = min; i <= max; i += step){
      result.push(i)
    }
    return result
  }