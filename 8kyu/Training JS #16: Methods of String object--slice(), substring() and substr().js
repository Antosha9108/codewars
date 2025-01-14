function cutIt(arr) {
    //coding here...
    let sorted = [...arr].sort((a, b) => a.length - b.length)
    let shortestLength = sorted[0].length

    return arr.map(el => el.slice(0, shortestLength))
}
// P array of strings
// R array of strings with every element's length == length of the shortest element from the first array.
// E ["codewars","javascript","java"] =>["code","java","java"]
// P first we need to sort the array in the ascending order.
//   after that we can declare a variable with the length of the first element in the sorted array.
//   lastly we map through the sorted array and slice each element to the given length.