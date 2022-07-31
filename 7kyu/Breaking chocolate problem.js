function breakChocolate(n,m) {
  console.log (n,m)
  if (n>=1 && m>=1){
    return n*m-1
  } else{
  return 0;
    }
}
// P: we are given two integers
// R: return an integer and if params are invalid return 0
// E: 5*5 => 24 if it's invalid 1*1 => 0
// P: first we need to see if the input is valid and any breaks are needed at all.
//     if input is valid then we apply logic n*m -1


// refactored with ternary operator and arrow func
let breakChocolate=(n,m)=> (n>=1 && m>=1)? n*m-1 : 0