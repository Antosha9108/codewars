function gimme (triplet) {
const middleNum = [...triplet].sort((a,b)=>a-b)[1]
// console.log(middleNum)
return triplet.indexOf(middleNum)
// return triplet.indexOf(middleNum)
}
// array
// original index of the middle element in the sorted array
// first we can sort the array and grab the [1]st element from it.
// after that we can return index of that element in the original array