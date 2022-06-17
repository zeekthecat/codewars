/*
Create a function mostLikely which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

mostLikely('1:3','1:2') will return false as 1 in 3 is less likely than 1 in 2.

7kyu
*/

function mostLikely(prob1,prob2){
    const percentProb1 = Array.from(prob1.split(':'),Number).reduce((a,b) => a / b)
    const percentProb2 = Array.from(prob2.split(':'),Number).reduce((a,b) => a / b)
    return percentProb1 > percentProb2
}