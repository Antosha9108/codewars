function isPythagoreanTriple(integers) {
  let nums = integers.sort((a,b)=>b-a)
  if (nums[0]*nums[0] == nums[1]*nums[1] + nums[2]*nums[2]){
    return true
  }else{
    return false
  }
}
// P array of integers
// R boolean
// E [3, 4, 5]), true ; ([3, 5, 9]), false)
// P first we need to sort the array to find the highest number.
//   then we can the comparison of the square of the highest number to the sum of the other two