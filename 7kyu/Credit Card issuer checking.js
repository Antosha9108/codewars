function getIssuer(number) {
    let string = String(number)

    if (string.length == 15 && (string.slice(0, 2) == '34' || string.slice(0, 2) == '37')) {
        return "AMEX"
    } else if (string.length == 16 && string.slice(0, 4) == '6011') {
        return "Discover"
    } else if ((string.length == 16 && (string.slice(0, 2) == '51' || string.slice(0, 2) == '52' || string.slice(0, 2) == '53' || string.slice(0, 2) == '54' || string.slice(0, 2) == '55'))) {
        return "Mastercard"
    } else if ((string.length == 13 || string.length == 16) && string.slice(0, 1) == '4') {
        return 'VISA'
    } else {
        return 'Unknown'
    }

    // Code your solution here
}
// P we are give a number
// R a string 
// E (4111111111111) == "VISA"
// P we need to set a bunch of if else conditionals and also check for the first integers