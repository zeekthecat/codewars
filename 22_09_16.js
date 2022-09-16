/*
Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples

8kyu
*/

function sumMul(n,m){
    let nums = []
    for (let i = n; i < m; i++){
      nums.push(i)
    }
    if (nums.length == 0){
      return 'INVALID'
    } else {
      return nums.filter(num => num % n == 0).reduce((a,b) => a + b)
    }
}