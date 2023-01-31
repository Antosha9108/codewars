function add(...args) {
    return Math.round(args.map((element, index) => element / (index + 1))
        .reduce((acc, c) => acc + c, 0));
}

// first we need to add spread syntax into parameters.
// after that we can map through the array with element and index and get a new array with (element / (index+1))// because indexing
//   starts with 0.
//   lastly we reduce the array to get the sum