/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

7kyu
*/

const binaryArrayToNumber = arr => {
    const numString = arr.join('')
    return parseInt(numString, 2)
}