/*
Find the mean (average) of a list of numbers in an array.

8kyu
*/

function findAverage(nums){
    return nums.reduce((a, b) => a + b, 0) / nums.length
}