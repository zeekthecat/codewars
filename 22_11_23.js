/*
Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

7kyu
*/

const unscrambleEggs = word => word.replace(/egg/g, '')