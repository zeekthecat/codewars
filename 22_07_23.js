/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

7kyu
*/

function solve(s){
    let upperCaseTotal = s.length - s.replace(/[A-Z]/g, '').length
    let lowerCaseTotal = s.length - s.replace(/[a-z]/g, '').length
    
    if (upperCaseTotal > lowerCaseTotal){
      return s.toUpperCase()
    } else if (upperCaseTotal <= lowerCaseTotal){
      return s.toLowerCase()
    }
}