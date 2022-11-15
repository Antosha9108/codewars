function toCsvText(array) {
  let arr = array.map((element)=>element.join(',')).join('\n')
  return arr
  
   
}

// P an array
// R a string with \n
// E input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// P first we need to join the subarrays inside the array with (',')
//   then we can combine them with another join ('\n')