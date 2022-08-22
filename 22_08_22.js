/*
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

8kyu
*/

function toBinary(n){
    return Number((n >>> 0).toString(2))
}