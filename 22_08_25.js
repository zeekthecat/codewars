/*
Write function which takes a string and make an acronym of it.

Rule of making acronym in this kata:

split string to words by space char
take every first letter from word in given string
uppercase it
join them toghether

7kyu
*/

function toAcronym(inp){
    return inp.split(' ').map(word => word[0]).join('').toUpperCase()
}