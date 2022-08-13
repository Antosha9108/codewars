function findLongest(str) {
  
  let wordArray = str.split(" ");
  
  return Math.max(...wordArray.map(element => element.length))
}


// function findLongest(str) {
//     var spl = str.split(" "),
//         longest = 0;
    
//     for (var i in spl) {
//       if (spl[i].length > longest) {
//         longest = spl[i].length;
//       }
//     }
  
//     return longest;
//   }