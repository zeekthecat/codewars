/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

7kyu
*/

function findLongest(array){
    let strArray = array.map(a => a.toString())
    return Number(strArray.sort((a,b) => b.length - a.length)[0])
}