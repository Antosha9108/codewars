function alienLanguage(str) {
    return str.split(' ').map(word => word.slice(0, -1).toUpperCase() + word[word.length - 1].toLowerCase()).join(' ')

}
// P a string
// R a modified string where every word is capitalized besides the alst letter
// E "Hello World" => "HELLo WORLd"
// P first we need to split the string into the array of words. then we can map through the array:
//   we slice each word up to last letter and capitilize it, then concat with the lowercased last letter.