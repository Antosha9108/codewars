function sortArray(array) {
    // Return a sorted array.
        let odds = array.filter((element)=>element%2!=0).sort((a,b)=>a-b)
        return array.map((element)=>element % 2 ? odds.shift() : element)
        
      
  }
  
  // P array
  // R sorted array
  // E 5,3,2,8,1 => 1,3,2,8,5,4
  // P  first we can declare an odds array and add the odd numbers to it from the 
  //       filtered array
  //       then we can sort it
  //       then we map through original array with the conditional( or ternary) if 
  //         element %2 we shift the element from odds if not we keep the element