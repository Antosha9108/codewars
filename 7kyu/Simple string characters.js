function solve(s) {

    let upper = s.split('').filter(el => el !== el.toLowerCase()).length
    let lower = s.split('').filter(el => el !== el.toUpperCase()).length
    let nums = s.split('').filter(el => !isNaN(el)).length
    let specialChars = s.split('').filter(el => el == el.toLowerCase())
        .filter(el => el == el.toUpperCase())
        .filter(el => isNaN(el)).length


    return [upper, lower, nums, specialChars]


}
// P a string
// R an array with integers representing upper,lower, integer and special chars
// E"*'&ABCDabcde12345"=>
// 4,5,5,3 (ABCD,abcde,12345,"*')
// P
// we can declare 4 variables for each number we need and filter through it
// for the third array we need to fitler with isNaN() instead of Number,
//     because it's not handling zeroes correctly.
//   for the fourth array we use all the methods from the last three
//   bt inverse
//     edit(dont forget to add .length to every single one)

