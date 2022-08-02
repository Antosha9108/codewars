function dontGiveMeFive(start, end){
    let newArr =[]
    for (let i=start; i<=end; i++){
        newArr.push(i)
    }
     newArr =newArr.filter(item => !item.toString().includes('5'))
    return newArr.length
}
// P: we are given 2 integers
// R: return should be an integer( a length of the array without fives)
// E: 1,9 => 8 or 4,17 => 12 (from 4 to 17 is 14 numbers minus 5 and 15 == 12)
// P: first we would need a for loop with start and end and push all the numbers to the array.
//     then we need to find a way to remove numbers with 5s in it includes? or filter).
        // all the items needed to be turned into strings and then check for includes('5')
//     and then return the length of the new array. 