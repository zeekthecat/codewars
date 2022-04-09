// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
// 7 kyu

function twiceAsOld(dadYearsOld, sonYearsOld) {
    if (sonYearsOld === dadYearsOld / 2) {
      return 0
    } else if (sonYearsOld != dadYearsOld / 2){
      return Math.abs((dadYearsOld - sonYearsOld) - sonYearsOld)
    }
  }