/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

8kyu
*/

const divisibleBy = (numbers,divisor) => numbers.filter(x => x % divisor == 0)