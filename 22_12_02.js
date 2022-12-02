/*
Remove n exclamation marks in the sentence from left to right. n is positive integer.

8kyu
*/

const remove = (s,n) => s.replace(/\!/g, x => n && n-- ? '' : x)