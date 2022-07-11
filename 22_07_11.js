/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

7kyu
*/

function smallEnough(a,limit){
    const numsBelow = value => value <= limit
    return a.every(numsBelow)
}