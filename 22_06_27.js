/*
Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

8kyu
*/

function strCount(str,letter){  
    return str.split(letter).length - 1
}