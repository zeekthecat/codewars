/*
You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.

7kyu
*/

const arraySum = arr => arr.flat(Infinity).filter(n => typeof n == 'number').reduce((a,b) => a + b)