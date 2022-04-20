// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// 8 kyu

const countSheeps = (arrayOfSheep, value) => arrayOfSheep.reduce((a, v) => (v === true ? a + 1 : a), 0);