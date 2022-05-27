function digitize(num) {
  //function for the Array.from method
  let myFunc = num => Number(num)

let arr = Array.from(String(num),myFunc)

//reverse the array
return arr.reverse()

} 

//different solution
// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }