/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

7kyu
*/

function number(array){
    let result = []
    for (let i = 1; i <= array.length; i++){
      result.push(`${i}: ${array[i - 1]}`)
    }
    if (result.length == 0){
      return []
    } else {
      return result
    }
  }