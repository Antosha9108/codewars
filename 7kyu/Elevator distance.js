function elevatorDistance(array) {

    let numsArr = [];

    for (let i = 0; i < array.length - 1; i++) {
        numsArr.push(array[i] - array[i + 1])
    }
    return numsArr.map(num => Math.abs(num)).reduce((acc, c) => acc + c, 0)


    // your code here
}

// P an array of integers
// R an integer
// E 5,2,8 => 9 (5-2==3, 2-8 ==abs 3, 3+6=9
// P first we can declare an empty array where we can add all the numbers to.
//   then we need to do a for loop and subtract i+1 and push them to the array.
//               we can map through array and make all numbers positive with abs number.
//               lastly we reduce the array.

