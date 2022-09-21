/*
Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.

8kyu
*/

function findLongest(str){
    let spl = str.split(' ').sort((a,b) => b.length - a.length)
    return spl[0].length
}