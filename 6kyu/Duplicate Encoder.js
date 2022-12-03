function duplicateEncode(word){
  let arr = word.toLowerCase().split('')
    
    return arr.map((element)=> arr.indexOf(element) === arr.lastIndexOf(element) ? '(' : ')' ).join('')
}


// we get a string as a parameter
// we need return a string with ( ) instead of characters
// ("din") => "((("
// ("recede") => "()()()"

// first we need to change casing on the given string (toLowerCase()) and split it into an array so we can use methods on it.
// after that we map through it cheching if element is in array only once or not 
//   with arr.indexOf(element) === arr.lastIndexOf(element)
//   we add the ternary to it with "(" or ')'
//   lastly we just need to join it back into a string.