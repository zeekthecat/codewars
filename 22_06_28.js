/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

7kyu
*/

function XO(str){
    return str.toLowerCase().split('x').length-1 == str.toLowerCase().split('o').length-1
}