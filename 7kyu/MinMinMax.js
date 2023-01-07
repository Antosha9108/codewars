function minMinMax(array) {
  let minNum = Math.min(...array)
  let maxNum = Math.max(...array)
  let result = minNum
  
    for (let i=0;i<array.length;i++){
      if (array.includes(result)){
        result++
      }
    }
  
  return [minNum,result,maxNum]
}
// P array
// R array with integers
// E [-1,4,5,-23,24] => [-23,-22,24] // 
// P first we need to sort the original array and assign three variables for min, result and max.
        // we need to declare a variable result =Math.min(..array) to have a variable to use in the loop
//       we do NOT need to sort it because we gonna use spread syntax and Math.min/max to find the values

//     we gonna assign result to minNum and do a for loop
//       if the array includes the result we add plus one until it gets to the number that is not in the array.
//       lastly we just return 3 values in one array.
    
    

// OTHER SOLUTION


// function minMinMax(arr) {
// 	var max = Math.max(...arr);
//   var min = Math.min(...arr);
//   for (var i = min; i < max; i++) {
//   	if (!arr.includes(i)) return [min, i, max];
//   }
// }