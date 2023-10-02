function isOpposite(s1, s2) {
    let testString = s1.split('').map(el => {
        if (el == el.toLowerCase()) {
            return el.toUpperCase()
        } else if (el == el.toUpperCase()) {
            return el.toLowerCase()
        }
    }).join("")

    return s1 == '' && s2 == '' ? false : testString === s2


}
// P two strings 
// R return a boolean
// E ab == AB => true
// P first we can create a new string with opposite cases for each letter. and then we 
//   compare them to get a boolean.
//  to get the string we gonna need to map through the s1 and convert each letter to the different case with if else. don't forget to join it.

// to check for the empty string edge case we put everything in the ternary   return s1=='' && s2==''? false : testString ===s2
