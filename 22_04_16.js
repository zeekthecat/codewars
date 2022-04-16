// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// 7 kyu

function highAndLow(numbers){
    let result = numbers.split(" ");
    return Math.max.apply(null, result) + " " +  Math.min.apply(null, result)
}