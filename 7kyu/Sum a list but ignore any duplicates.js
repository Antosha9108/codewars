function sumNoDuplicates(numList) {
    if (numList.length == 0) {
        return 0
    }
    let newArr = numList.filter((el) => numList.indexOf(el) === numList.lastIndexOf(el))
    if (newArr.length !== 0) {
        return newArr.reduce((a, b) => a + b)
    } else {
        return 0
    }
}
// P array of digits
// R integer
// E [3,4,3,6] => 10
// P first we need to remove duplicates from the array and the reduce it