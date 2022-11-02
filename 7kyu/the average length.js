function averageLength(arr) { 
  // good luck
  let averageNum = Math.round(arr.join('').length / arr.length)
  return arr.map((element) =>element[0].repeat(averageNum))
  
}
// P array of strings
// R also array of strings
// E aa, bbb, cccc => aaa,bbb,ccc
// P first we need to find an average length.
//   we can join the array together with .join('') and the split the string's length by arr length
//    after that we can map and multiply them by average num
   
   
   