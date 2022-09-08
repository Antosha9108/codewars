function maxMultiple(divisor, bound){
  let arr =[];
  for (let i=0;i<=bound;i++){
    if(i%divisor==0){
      arr.push(i)
    }
  }
  return arr[arr.length-1]
}
// P two integers
// R an integer
// E 2,7 =>6 ; 
//   7,17=>14
// P first we assign an empty array 
//   then we can make a for loop to get the number divisible by divisor
//   then we push them to the array and return the last element