const sumSquareEvenRootOdd = ns => {
    let result = ns.map(num => {
        if (num % 2 == 0) {
            return num * num
        } else {
            return Math.sqrt(num)
        }
    })
        .reduce((acc, c) => acc + c, 0)
    return Number(result.toFixed(2))
};

// P array of integers
// R an integer
// E ([4,5,7,8,1,2,3,0]) => 91.61
// P we can map through the original array with the custom function
//   if the number is even we square it and push into the array
//   if the number is odd we get the square root of the number and also push it into the array
//   lastly we reduce the array and round it to 2 decimals