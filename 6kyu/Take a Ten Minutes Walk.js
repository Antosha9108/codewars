function isValidWalk(walk) {
  if (walk.length != 10){
    return false
  }
  const counts = {};

for (const letter of walk) {
  counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
}
console.log(counts)
if ((counts['n'] == counts['s']) && (counts['e'] == counts['w'])){
  return true
} else {
  return false
}
}

// P an array of string letters
// R boolean
// E ['n','s','n','s','n','s','n','s','n','s'] => true
// P  first we need to see if the array. length is 10
//       then we need to count occurances of strings and can assign it to the object
//   if nCount == sCount && eCount == wCount we return true
//   else we return false

