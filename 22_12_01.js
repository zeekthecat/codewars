/*
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.

7kyu
*/

function swap(string){
    return string.replace(/[aeiou]/g, function(x){
      return x.toUpperCase()
    })
  }