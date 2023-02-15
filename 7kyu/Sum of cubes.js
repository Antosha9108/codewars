function sumCubes(n){
let arr =[];
  
  for (let i=0;i<=n;i++){
    arr.push(i)
  }
  return arr.map((element)=> Math.pow(element,3)).reduce((a,b)=>a+b)
  
  
  
}

// P n - integer
// R integer
// E 2=>9 
// P first we need to declare and array and make a for loop with n parameter.We will loop
//   and push the numbers to the array.
//   then we map through the created array cubing all the elements
//   lastly we need to reduce the array
  