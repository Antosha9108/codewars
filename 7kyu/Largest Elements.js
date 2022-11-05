function largest(n,xs){
    // Find the n highest elements in a list
  return n==0 ? [] : xs.sort((a,b)=>a-b).slice(-n)
  
}


// we get an integer and an array
// we need to return an array with n  largest elements
// (2,[10,9,8,7,6,5,4,3,2,1]),[9,10]
// first we need to sort the array. 
//     then we slice it with(-n) to start from the end of the array.
//----
// did not account for n==0 first so added a ternary