function getSumOfDigits(integer) {
    return String(integer).split('').map(num => Number(num)).reduce((acc, c) => acc + c, 0)
}