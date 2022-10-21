/*
In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:

nameThatNumber(4)   // returns "four"
nameThatNumber(19)  // returns "nineteen"
nameThatNumber(99)  // returns "ninety nine"
Words should be separated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!

7kyu
*/

function nameThatNumber(num){
    const unit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let twoDigitNums = String(num).split('').map(num => num)
    
    if (num.toString().length == 1){
      return unit[num]
    } else if (num.toString().length > 1 && twoDigitNums[0] > 1 && twoDigitNums[1] != 0){
      return `${tens[twoDigitNums[0] - 1]} ${unit[twoDigitNums[1]]}`
    } else if (num.toString().length > 1 && twoDigitNums[1] == 0){
      return `${tens[twoDigitNums[0] - 1]}`
    } else if (num == 14 || num == 16 || num == 17 || num == 19) {
      return `${unit[twoDigitNums[1]]}teen`
    } else if (num == 11){
      return 'eleven'
    } else if (num == 12){
      return 'twelve'
    } else if (num == 13){
      return 'thirteen'
    } else if (num == 15){
      return 'fifteen'
    } else if (num == 18){
      return 'eighteen'
    }
  }