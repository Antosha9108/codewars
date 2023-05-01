function uniTotal(string) {
    return string.split('')
        .map(el => el.charCodeAt())
        .reduce((acc, c) => acc + c, 0) || 0

}

// first we need to split the string into the array.
// then we map through it with charCodeAt() to get an array of ascii nums
// then we reduce it.
// instead of making a conditional with string.length ==0 we can add || 0
// in the end. It works because ifthe string.length is 0 it is a falsy value
// and it will return 0 after ||