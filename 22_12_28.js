/*
In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

Note
1 Dollar = 100 Cents

8kyu
*/

function fuelPrice(litres,pricePerLitre){
    if (litres < 2){
      return pricePerLitre * litres
    } else if (litres >= 2 && litres < 4){
      return Math.round(((pricePerLitre - 0.05) * litres) * 100) / 100
    } else if (litres >= 4 && litres < 6){
      return Math.round(((pricePerLitre - 0.10) * litres) * 100) / 100
    } else if (litres >= 6 && litres < 8){
      return Math.round(((pricePerLitre - 0.15) * litres) * 100) / 100
    } else if (litres >= 8 && litres < 10){
      return Math.round(((pricePerLitre - 0.20) * litres) * 100) / 100
    } else if (litres >= 10){
      return Math.round(((pricePerLitre - 0.25) * litres) * 100) / 100
    } 
  }