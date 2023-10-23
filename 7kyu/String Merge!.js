function stringMerge(string1, string2, letter) {
    let word1 = string1.slice(0, string1.indexOf(letter) + 1)
    let word2 = string2.slice(string2.indexOf(letter) + 1, string2.length)
    console.log(word1)
    console.log(word2)
    return word1 + word2
}
// P two strings and a char string
// R one modified string
// E hello world l => held
// P first we need to find the index of the letter in every word and we can add it to variables.
//   then we slice first word from zero to letter and second word from letter to length-1.
// then we return both words with + (or push them into the array and join the array.)

