/*
Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

When you have finished the work, click "Run Tests" to see if your code is working properly.

8kyu
*/

function trueOrFalse(val){
    return val == false || val == null || val == undefined ? "false" : "true"
}