function mergeArrays(arr1, arr2) {

   let newArr =  arr1.concat(arr2).sort((a,b)=>a-b)
   return newArr.filter((a, b) => newArr.indexOf(a) === b)
  }