function stringTransformer(str) {
  let arr = str.split('').map((element)=>{
    if (element == element.toLowerCase()){
      return element.toUpperCase()
    } else {
      return element.toLowerCase()
    }
  }).join('')

  
       
       
       
       let reversedArray = arr.split(' ').reverse().join(' ')
  return reversedArray
}
// P a string
// R a string with reversered words and cases
// E 'Example string'), 'STRING eXAMPLE'
//    P  -first we need to split the string into the array.
//       -then we can map through the array with conditionals and if the element
//       equals element.to lower we return upper.
//       -the second conditional is reversed.
//       -now we join it back to get words together and keep the spaces where they
//       should be.
//       after that we do .split(' ').reverse().join(' ') to swap the words.