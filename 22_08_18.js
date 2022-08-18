/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

7kyu
*/

function findShort(s){
    let shortest = s.split(' ').sort((a,b) => a.length - b.length)
    return shortest[0].length
}