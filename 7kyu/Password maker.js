function makePassword(phrase) {
    // Your code here
    return phrase.split(' ')
        .map(el => el[0])
        .join('')
        .replaceAll('i', '1')
        .replaceAll('I', '1')
        .replaceAll('o', '0')
        .replaceAll('O', '0')
        .replaceAll('s', '5')
        .replaceAll('S', '5')

}
// P string
// R modified string
// E "Keep Calm and Carry On"--> "KCaC0"
// P first we need split the string into an array and get only the first characters.
//   after that we can do a bunch of replaceAll methods and join the array back.