/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

7kyu
*/

function isSortedAndHow(array){
    if (array.slice(1).every((num,i) => num >= array[i])){
      return 'yes, ascending'
    } else if (array.slice(1).every((num,i) => num <= array[i])){
      return 'yes, descending'
    } else {
      return 'no'
    }
}