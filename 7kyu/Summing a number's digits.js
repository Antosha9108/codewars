function sumDigits(number) {
    return String(Math.abs(number)).split('').map(num => Number(num)).reduce((acc, c) => acc + c, 0)
}

// first we need to convert given number to absolute value to get rid of negative
// then we convert it into the string and split it into the array to get separate values
// after that we map through array with Number() and reduce it.