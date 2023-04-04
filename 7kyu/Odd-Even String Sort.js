function sortMyString(S) {
    let arr = S.split('')
    let evenChars = arr.filter((char, index, arr) => index % 2 === 0).join('')
    let oddChars = arr.filter((char, index, arr) => index % 2 !== 0).join('')


    // your code here
    return `${evenChars} ${oddChars}`;
}
// P a string
// R modified string
// E CodeWars => CdWr oeas
// P first we need to split the string into an array
//   the we can assign two variables one for even indexes and one for odds
//   we can filter through the original array with index%2 ==0 twice and then join them
//   lastly we can add both variable with a template literal and space inbetween.