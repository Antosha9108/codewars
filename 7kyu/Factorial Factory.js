//This function should return n!
function factorial (n) {
  let arr = [];
  if (n<0){
    return null
  } else if (n==0){
    return 1
    }else {
  for (let i=1;i<=n;i++){
    arr.push(i)
    }
  }
  return arr.reduce((a,b)=>a*b)
}
// // P an integer
// // R an integer that has multiples of n
// // E 2=>2; 5 > 1x2x3x4x5
// // P first we need a conditional to cover the results for negative integers and 0
//      if the integer is positive we need to do a for loop and push all the n numbers to an array. then we can reduce it
// //   and convert to number 
  