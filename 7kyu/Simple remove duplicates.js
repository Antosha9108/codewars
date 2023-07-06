function solve(arr) {
    return arr.reverse().filter((a, b) => arr.indexOf(a) === b).reverse()
}
// We can try to reverse the array and then remove the duplicates and then reverse it back

// that way we start filtering from the end of the array. and then reverse it back to get filtered
// array in the orignal order

// alternatively we can use the lastIndexOf

function solve(arr) {
    return arr.filter((val, i) => arr.lastIndexOf(val) == i);
}