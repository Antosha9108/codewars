function bandNameGenerator(str) {
    if (str[0] === str[str.length - 1]) {
        return str[0].toUpperCase() + str.slice(1) + str.slice(1)
    } else {
        return 'The ' + str[0].toUpperCase() + str.slice(1)
    }
}
// P a string
// R a modified string
// E knife => the knife, tart => Tartart.
// P we can set up a conditional to see if the first and the last
// letters of the string match. 