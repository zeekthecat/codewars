/*
Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

8 kyu
*/

let min = function(list){
    list.sort((a,b) => a - b)
    return list[0]
}
  
let max = function(list){
    list.sort((a,b) => b - a)
    return list[0]
}