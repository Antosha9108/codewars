// function first(arr, n) {
//     if (n===0){
//       return []
//     } else if (n>1){
//       return arr.slice(0,n)
//     }else {
//       return arr.slice(0,1)
//     }
//   }

function first(arr, n = 1) {
  return arr.slice(0, n)
}

// P array and int
// R array of elements up to n
// E  const arr = ['a', 'b', 'c', 'd', 'e'];
//     assert.sameOrderedMembers(first([...arr]   ),      ['a']);
//     assert.sameOrderedMembers(first([...arr], 2), ['a', 'b']);
// P we can slice the array starting from 0 to n
//   to address the edge case when n is undefined we can pass a default value of 1 to n