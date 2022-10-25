/*
Given an array/list of integers, find the Nth smallest element in the array.

7kyu
*/

function nthSmallest(arr,pos){
    arr = arr.sort((a,b) => a - b)
    return arr[pos - 1]
  }