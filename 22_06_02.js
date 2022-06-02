/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.

7kyu
*/

function solve(s){
    const uppercaseLetters = s.replace(/[^A-Z]/g, '').length
    const lowercaseLetters = s.replace(/[^a-z]/g, '').length
    const numbers = s.replace(/[^0-9]/g, '').length
    const specialChars = s.replace(/[a-zA-Z0-9]/g, '').length
    let newArray = [uppercaseLetters, lowercaseLetters, numbers, specialChars]
    return newArray
}