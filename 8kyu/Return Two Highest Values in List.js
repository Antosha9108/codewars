function twoHighest(arr) {
  return arr.sort((a, b) => b - a).filter((a, b) => arr.indexOf(a) === b).slice(0, 2)
}



function twoHighest(arr) {

  console.log(arr)
  let sortedArray = arr.sort((a, b) => b - a)
  let removedDupes = [...new Set(sortedArray)]

  return removedDupes.slice(0, 2)

}

// P array of integers
// R 2 highest numbers (edge case if array.length is less than 2 return the first one)
// E 15,20,20,17 => 20,17
// P

// first we need to sort the array in reverse order.
// after that we can remove the duplicates
//lastly we can slice the array that will return first 2 values.