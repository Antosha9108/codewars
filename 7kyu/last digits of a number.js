function lastDigit(n, d) {
    let arr = n.toString().split('').map(Number)
    if (d > arr.length) {
        return arr
    } else if (d <= 0) {
        return []
    } else {
        return arr.slice(-d)
    }
}
// P 2 integers
// R an array of integers
// E 1234, 2 => [3,4]
// P first we need to split the integer into an array of numbers
//   then we slice it from the back with -d
//   we also do need to account for special cases