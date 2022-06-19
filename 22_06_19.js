/*
Remove all exclamation marks from the end of sentence.

8kyu
*/

function remove(string){  
    return string.replace(/!+$/g, '')
}