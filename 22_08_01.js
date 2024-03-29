/*
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

8kyu
*/

const ensureQuestion = s => s[s.length - 1] == '?' ? s : `${s}?`