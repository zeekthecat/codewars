/* 
Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

8 kyu

*/

function usdcny(usd) {
    let yuan = (usd * 6.75).toFixed(2)
    return `${yuan} Chinese Yuan`
  }