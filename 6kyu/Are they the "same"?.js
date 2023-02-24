function comp(array1, array2) {
    if (array1 == null || array2 == null) {
        return false
    } else {
        array1 = array1.sort((a, b) => a - b)
        array2 = array2.sort((c, d) => c - d)

        return array1.map(element => element * element).join() == array2.join()

    }
}
// P two arrays
// R bool
// E a = [121, 144, 19, 161, 19, 144, 19, 11]  
//   b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//       every element in array b should be a square of the element in array a
// P 
//   first we need to sort both array so it is easier to compare the elements
//   than we map the first array and square every element and compare it to the 
//   second array
//   -update one: did not work for empty array so added null conditional in the
//     beginning.
//   -update two: to avoid the loops convert both arrays into string with toString()
//     method. (also could use .join())