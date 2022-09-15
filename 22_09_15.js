/*
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

8kyu
*/

function well(x){
    if (x.every(str => str === 'bad')){
      return 'Fail!'
    } else if (x.filter(str => str === 'good').length <= 2){
      return 'Publish!'
    } else {
      return 'I smell a series!'
    }
}