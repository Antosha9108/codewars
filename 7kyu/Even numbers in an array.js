function evenNumbers(array, number) {
  return array.filter((element)=> element%2==0).slice(-number)
}


// P an array of integers and an integer
// R array of integer with length of number
// E [1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]
// P first we need to filter the array and only return the elements %2==0
//       then we can use .slice() to get the needed numbers from the array.
//       we need to pass -number // - to get the them from the back of the array
//       like .length-1