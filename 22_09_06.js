/*
Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

8kyu
*/

function pickIt(arr){
    let odd = []
    let even = []
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 0){
        even.push(arr[i])
      } else {
        odd.push(arr[i])
      }
    }
    return [odd,even]
}