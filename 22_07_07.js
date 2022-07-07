/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

8kyu
*/

function basicOp(operation,value1,value2){
    return eval(value1 + operation + value2)
}