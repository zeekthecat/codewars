/*
Can you implement a function that will return number of words in a string?

You have to ensure that spaces in string is a whitespace for real.

8kyu
*/

function countWords(str){
    return str.split(/\s/).filter(x => x).length
  }