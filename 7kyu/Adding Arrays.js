function arrAdder(arr) {
    let combinedWords = []
    for (let i = 0; i < arr[0].length; i++) {
        let word = '';
        for (let j = 0; j < arr.length; j++) {
            word += arr[j][i]
        }
        combinedWords.push(word)
    }
    return combinedWords.join(' ')
}




// P an array of arrays
// R a string
// E   
// ['J','L','L','M'],
// ['u','i','i','a'],
// ['s','v','f','n'],
// ['t','e','e',''] =>just live a life man

//P first we iterate over the columns (indexes) of the subarrays 
// using the outer for loop. Inside this loop, we initialize an empty
// string called word.

// Then, using the inner for loop, we iterate over the rows (subarrays) 
// and concatenate the character at the current column/index to 
// the word string. This concatenation is done for each row, effectively
// combining the characters from the same index in each subarray.

// After the inner loop finishes, we push the word into the combinedWords array.
// This process is repeated for each column/index in the subarrays.

// Lastly we join the array