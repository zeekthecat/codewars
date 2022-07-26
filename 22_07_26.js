/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

8kyu
*/

function addLength(str){
    return str.split(' ').map(a => a + ` ${a.length}`)
}