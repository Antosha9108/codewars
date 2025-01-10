function colorOf(r,g,b){
  //coding here
  let arr =[r,g,b].map(el=>el.toString(16)).map(el =>el.padStart(2,'0')).join('')
  
  return `#`+arr
  
}

// function colorOf(r,g,b){
//   //coding here
//   let arr =[r,g,b].map(el=>el.toString(16)).map(el =>{
//     if (el.length == 1){
//       return `0`+el
//     } else {
//       return el
//     }
    
//   }).join('')
  
//   return `#`+arr
  
// }
// P 3 integers
// R we need to return the string, starting with #
// E (255,0,0) => "#ff0000"
// P first we need to convert the integers to the hexidecimals, once we have all three we can push it into an array
//   and then concatenate into the string starting with #.
  
  