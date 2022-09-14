function minValue(values){
  let newSet = [...new Set(values)].sort((a,b)=>a-b).join('')
  return Number(newSet)
}
// P an array of digits
// R an integer
// E [1, 3, 1]), 13 [4, 8, 1, 4]), 148
// P first we need to remove all duplicates from the array and sort it in the ascending order
//     then we need to join all elements of the array into the string with.join method
//     and finally we return the Number of newSet