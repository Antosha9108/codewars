

function inAscOrder(arr) {
   let str = arr.join("")
  let sortedArr = arr.sort((a,b)=> a-b).join('')
  console.log(str)
  console.log(sortedArr)
  return str ===sortedArr

//   P an array of integers
//   R bool
//   E 1,2,3,4 =>true 15 2 5 =>false
//   P first we need to declare a variable and assign a sorted array to it.
//     after that we can set up a conditional to see if they are equal and return
//     a boolean
}

console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]))