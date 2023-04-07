multiplicationTable = function (size) {
    //declare number and array for the numbers up to size
    //and second array to push multiplied numbers
    let arr = []
    let arr2 = []
    let subArrays = []
    //   for loop to get nums into the array
    for (let i = 1; i <= size; i++) {
        arr.push(i)
    }

    //double loop to push all multiplied nums into arr2
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            arr2.push(i * j)
        }
    }


    // now slice into sub arrays
    for (let i = 0; i <= arr2.length; i += size) {
        subArrays.push(arr2.slice(i, i + size))
    }
    return subArrays.slice(0, size)
}
