/*
Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

8kyu
*/

function evalObject(value){
    let result = 0
    switch(value.operation){
      case '+': result = value.a + value.b;
        break;
      case '-': result = value.a - value.b;
        break;
      case '/': result = value.a / value.b;
        break;
      case '*': result = value.a * value.b;
        break;
      case '%': result = value.a % value.b;
        break;
      case '^': result = Math.pow(value.a, value.b);
        break;
    }
    return result
  }