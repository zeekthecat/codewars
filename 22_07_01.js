/*
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

8kyu
*/

function saleHotdogs(n){
    if (n < 5){
      return n * 100
    } else if (n < 10){
      return n * 95
    } else {
      return n * 90
    }
}