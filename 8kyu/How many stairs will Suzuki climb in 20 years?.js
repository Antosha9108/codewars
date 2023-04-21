function stairsIn20(s) {
    return s.flat().reduce((acc, c) => acc + c, 0) * 20
}



// P a nested array
// R integer
// E too large
// P first we need to flatten the array and reduce it to get one number.
//   after that we multiply it by 20