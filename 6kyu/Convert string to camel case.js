function toCamelCase(str) {
    if (str == '') {
        return ''
    }

    let words = str.split(/[-_]/).map(word => word[0].toUpperCase() + word.slice(1))
    let firstWord = words[0][0].toLowerCase() + words[0].slice(1)

    if (str[0] == str[0].toLowerCase()) {
        return [firstWord, words.slice(1)].flat().join('')
    } else {
    } return words.join('')

}

// P a string
// R a modified string that is Camel Cased.
// E "the-stealth-warrior" => theStealthWarrior
// P first we need to find a way to split the string with two different
//   separators. (we gonna use regex this time str.split(/[-_]/))
//   after we have done that we can loop through the array and Uppercase
//   every first letter of the elements
//   lastly to address the edge case to of the first letter being lowercase
//   we can set up a conditiona for the whole string.