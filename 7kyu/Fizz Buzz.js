// Return an array
function fizzbuzz(n)
{ let arr =[]
  // we get an integer
    // we need to return an array of numbers up to an integer
// first we need to declare that array.
//     we can do it with the for loop
//   if a number%3==0 we push"Fizz" to the array
//       a number%5==0 we push "Buzz" to the array
//       a number %3==0 && number%5==0 we push "FizzBuzz"to the array
  
  
  
  for (let i=1;i<=n;i++){
    if(i%3==0 && i%5==0){
      arr.push('FizzBuzz')
    }else if(i%5==0){
      arr.push('Buzz')
    } else if (i%3==0){
      arr.push('Fizz')
    } else {
    arr.push(i)
      }
  }
 return arr
}
