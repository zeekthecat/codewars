/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

8kyu
*/

function hello(name){
    if (typeof name === 'string' && name.length > 0){
      return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
    } else {
      return `Hello, World!`
    }
}