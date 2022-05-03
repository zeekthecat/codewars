/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

7kyu
*/

const getCount = str => Array.from(str).filter(letters => 'aeiou'.includes(letters)).length
