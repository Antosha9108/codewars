const removeConsecutiveDuplicates = s => {
  return s.split(' ')
    .filter((element,index,array)=> element != array[index-1]).join(' ')
  
  
  
  
}

// P string
// R string with removed consecutive dups
// E "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

      --> "alpha beta gamma delta alpha beta gamma delta"
// P first we need to split the string into the array of words.
//       then we filter it and pass all three parameters(element, index, array).
//       in order to do it we compare the current element to the previous one through the index.
      
//       lastly we just need to join the array back into the string.
      