function initializeNames(name) {
    // Insert your brilliant co
    let array = name.split(' ')
    let firstName = array[0]
    let lastName = array[array.length - 1]

    let middle = array.slice(1, -1).map(el => `${el[0]}.`).join(' ')

    return array.length > 2 ? [firstName, middle, lastName].join(' ') : array.join(' ')


}
// P a string
// R a modified string
// E Alice Betty Catherine Davis' => 'Alice B. C. Davis'
// P first we convert the given string into an array.
//   we can assign the first and last names to variables to save for later.
//   the rest of the values from the array we can modify just to the first letter
//   then we join whatever variables we need together.

