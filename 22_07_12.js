/*
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

7kyu
*/

function minValue(values){
    return Number(Array.from(new Set(values)).sort((a,b) => a - b).toString().split(',').join(''))
} 