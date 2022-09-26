/*
The Array's reverse() method has gone missing! Re-write it, quick-sharp!

When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

7kyu
*/

Array.prototype.reverse = function(){
    for (let i = 0; i <= (this.length - 1) / 2; i++){
      let num = this[i]
      this[i] = this[this.length - 1 - i]
      this[this.length - 1 - i] = num
    }
    return this
}