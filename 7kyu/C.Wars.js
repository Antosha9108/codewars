function initials(n) {
    let arr = n.split(' ')
    let initials = []
    for (let i = 0; i < arr.length - 1; i++) {
        initials.push(arr[i][0].toUpperCase())
    }
    return `${initials.join('.')}.${arr[arr.length - 1][0].toUpperCase()}${arr[arr.length - 1].slice(1)}`
}


// P String
// R modified string
// E code wars => C. wars, 'Barack Hussain obama' => B.H. Obama
// P we can turn the string into the array.
//  then we assign an empty array where we will push all the initials.
//     we start a for loop with i<arr.length-1 because we don't need to save the last element's first
//     letter. We will add it in the end of the string literal as a whole word.
//     We loop through the array and push the first letter capitalized into initials array.
//     lastly we return a string literal with initials array.join('.') and add the last word to it.
