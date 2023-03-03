function duplicateCount(text) {
    return text.toLowerCase().split('').filter(function (el, i, arr) {
        return arr.indexOf(el) !== i && arr.lastIndexOf(el) === i;
    }).length;
}




// a string 
// we need to return an integer 
// "aabbcde" -> 2

// text.toLowerCase()
// turn the string into an array.
// .filter(el,index,array)=> array.indexOf(el) !==i && array.lastIndexOf(el) ===i