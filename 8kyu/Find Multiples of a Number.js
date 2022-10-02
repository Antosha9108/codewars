function findMultiples(integer, limit) {
  let arr =[]
  for (let i=1;i<=(limit/integer);i++){
    arr.push(i*integer)
  }
  return arr
}

// P two integers( the number and the limit number)
// R return an array of multiples up to the limit
// E 5,25 => [5, 10, 15, 20, 25]
// P first we need to declare an empty array where we gonna push the integers in
//       then we gonna make a for loop where second parameter is limit/integer and then push the i*integer to the array
//       return the array

