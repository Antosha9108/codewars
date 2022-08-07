function maxTriSum(numbers){
  let newSet =[...new Set(numbers)]
  return newSet.sort((a,b)=>b-a).slice(0,3).reduce((acc,n)=>acc+n)
}
// P array of integers
// R an integer (sum of 3 highest numbers)
// E ([3,2,6,8,2,3]) => 17 // 6+8+3
// P
// first we need to remove the duplicates from the array and sort the array in the descending order.
// then we slice the array to the first three elements and reduce it with sum.