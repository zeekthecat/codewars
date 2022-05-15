/*
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

8 kyu
*/

function firstNonConsecutive(arr){
    for (let i = 1; i < arr.length; i++){
      if (arr[i - 1] + 1 !== arr[i])
        return arr[i]
    }
    return null
  }