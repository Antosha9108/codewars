function encryption(message) {
    let newMorse = CHAR_TO_MORSE
    return message.replaceAll(' ', "  ")
        .split('')
        .map(char => CHAR_TO_MORSE[char])
        .join(' ')
}


// return CHAR_TO_MORSE
// }
// P a string
// R a modified string containing morse code
// E "HELLO WORLD"=> ".... . .-.. .-.. ---   .-- --- .-. .-.. -..")
// P we already have a char_to_morse object predefined
//       we need to split the string first and map through it with
//         CHAR_TO_MORSE[char]
//       this will give us all the values needed
//       lastly we join the array into the string.
//       edit: forgot about the triple space inbetween words so
//       added replaceAll to the string in the beginning
