/*
You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

8kyu
*/

function validateHello(greetings){
    greetings = greetings.toLowerCase()
    return greetings.includes('hello')
    || greetings.includes('ciao')
    || greetings.includes('salut')
    || greetings.includes('hallo')
    || greetings.includes('hola')
    || greetings.includes('ahoj')
    || greetings.includes('czesc')
}