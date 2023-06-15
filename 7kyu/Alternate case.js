function alternateCase(s) {
    return s.split('')
        .map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase())
        .join('');
}

// first we split the string into an array
// then we map through the array with ternary: if el===el.toUpperCase() we return lowercase
//     if not we return uppercase
//lastly we join the array back into the string