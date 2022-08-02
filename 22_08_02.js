/*
Given a string str, reverse it and omit all non-alphabetic characters.

7kyu
*/

function reverseLetter(str){
    return str.replace(/[^a-z]/gi, '').split('').reverse().join('')
}