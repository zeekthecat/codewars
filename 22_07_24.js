/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

7kyu
*/

function sumOfMinimums(arr){
    return arr.reduce((a,b) => a + Math.min(...b), 0)
}