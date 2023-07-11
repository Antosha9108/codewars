function printerError(s) {
    //string of letters a to m
    let nonError = 'abcdefghijklm'
    //filtered original string
    let errorNum = s.split('').filter(letter => !nonError.includes(letter)).length

    return `${errorNum}/${s.length}`
}
// string
// string with number of errors and the length of orignal string
//abcx => 1/4
//first we declare a string containing letters from a to m
//   then we split given string into an array, filter through it with includes method and declared string
//   lastly we make string literal with result ang length of the given string 