function removeSmallest(numbers) {
  let index = numbers.indexOf(Math.min(...numbers))
  return [...numbers.slice(0, index), ...numbers.slice(index + 1)]
}
// P an array
// R an array without first smallest index
// E Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]
// P first we need to find the smallest number and its index in the array and assign it to the variable n
//   we can do it with Math.min
//   then we can return new array of two parts before index and after through slicing