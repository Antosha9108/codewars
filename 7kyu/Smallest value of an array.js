function min(arr, toReturn) {
//   let num = arr.sort((a,b)=>a-b)[0]
  if (toReturn === 'value'){
    return Math.min(...arr)
  } else if (toReturn === 'index') {
    return arr.indexOf(Math.min(...arr))
  }
  
}

//oneliner 
// let min = (arr, toReturn) => {
//     return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr))
  
//   }