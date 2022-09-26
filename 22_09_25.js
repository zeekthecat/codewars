/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

8kyu
*/

const invert = array => array.map(x => x >= 0 ? -Math.abs(x) : Math.abs(x))