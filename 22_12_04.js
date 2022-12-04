/*
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

7kyu
*/

function mostFrequentItemCount(collection){
    let frequentNum = collection.reduce((acc,item) => collection.filter((a) => a === acc).length >= collection.filter((a) => a === item).length ? acc: item, 0)
    return collection.filter(x => x == frequentNum).length
  }