// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// 7 kyu

function sortByLength (array) {
    return array.sort((x,y) => x.length - y.length)
 }