/*
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)

7kyu
*/

reverse = function(array){
    return array.map(array.pop,[...array])
  }