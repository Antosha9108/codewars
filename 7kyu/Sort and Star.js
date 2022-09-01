function twoSort(s) {
let word = s.sort()[0]
return word.split('').join('***')
}

// P an array of strings
// R a string with *** between each letter
// E "bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' )
// P first we need to sort the array alphabetically and pull out the first
//   word. after that we need to input *** between every letter


//one liner 
// s.sort()[0].split('').join('***')