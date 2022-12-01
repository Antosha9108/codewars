function solve(arr) {
  return arr.map((subArray) => [...new Set(subArray)].length)
  .reduce((acc,c)=>acc*c,1)
};


// P array of arrays
// R integer
// E  ([[1,2],[4],[5,6]]),4)   // [1,4,5],[1,4,6],[2,4,5],[2,4,6].
// P first we need to remove duplicates. we can use filter( ) method or new Set.
//   then we get the length of the subArrays( we don't need the actual nums anymore cause we remove the duplicates)
//   after that we can reduce the whole array with multiplier 