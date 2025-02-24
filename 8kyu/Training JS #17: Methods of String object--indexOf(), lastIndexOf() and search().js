function firstToLast(str,c){
  let firstChar = str.indexOf(c)
  let lastChar = str.lastIndexOf(c) 
  return str.search(c) == -1 ? -1 : lastChar - firstChar
  
}
// P a string and a character
// R an integer representing the gap between the first and last occurance
// E ("ababc","a") , 2)
// P first we need to find first and last occurances of the char in the string and then we can subtract first
//   from the last. 
//   for the edge case if any of the nums equal -1 we return -1


// function firstToLast(str,c){
//   let firstChar = str.indexOf(c)
//   let lastChar = str.lastIndexOf(c) 
//   return lastChar == -1 || firstChar == -1 ? -1 : lastChar - firstChar
  
// }