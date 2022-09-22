/*
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

8kyu
*/

function arrayMadness(a,b){
    let aSquare = a.map(x => Math.pow(x,2))
    let bCubed = b.map(x => Math.pow(x,3))
    return aSquare.reduce((a,b) => a + b) > bCubed.reduce((a,b) => a + b)
}