// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// 8 kyu

function digitize(n) {
    return String(n).split('').reverse().map(Number)
  }