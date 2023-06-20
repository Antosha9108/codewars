function eliminateUnsetBits(number) {
    let num = number.replaceAll('0', '')
    return num === '' ? 0 : parseInt(num, 2)
}
// P string
// R integer
// E 111=>1
// P first we need to remove all the zeroes from the string with replace all
// then we turn the string into binary with parseInt perhaps???
//   edit: needed ternary because empty string was returning NaN
