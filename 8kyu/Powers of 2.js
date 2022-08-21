function powersOfTwo(n){
  let arr =[]
  for (let i=0; i<=n;i++){
      arr.push(2**i)
  }
  return arr
}
// P an integer  
// R an array with integers multiplied to the power of two from zero to n
// E 0=> [1] 4=> [1, 2, 4, 8, 16]
// P first we need to make a loop and add the numbers from 0 to n. the we push 2 ** i from the 
// loop to the array