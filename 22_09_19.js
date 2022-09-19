/*
Write a function that finds the sum of all its arguments.

7kyu
*/

const sum = (...arguments) => arguments.reduce((a, b) => a + b)