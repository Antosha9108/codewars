function modifyMultiply (str,loc,num) {
let word = str.split(' ')[loc]
let arr=[]
for (let i=0;i<num;i++){
  arr.push(word)
}
  return arr.join('-')

} 
// P a string of words, an integer representing index, and a number
// R a string of words from given integer repeated num times with hyphen
// inbetween
// E ("This is a string",3 ,5) => "string-string-string-string-string"
// P first we need to find a word with the given index in the string
//   we can do that by splitting the str into an array with .split(' ')
//   then we pull the element with given index from the string
//   we repeat it num times and join with '-'