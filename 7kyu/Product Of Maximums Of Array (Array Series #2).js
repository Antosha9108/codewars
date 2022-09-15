function maxProduct(numbers, size){

return numbers.sort((a,b)=>b-a).slice(0,size).reduce((a,b)=>a*b)
}
// P array and an integer
// R integer
// E ({4, 3, 5}, 2) ==>  return (20) //take two highest nubmers and multiply them
//   ({8, 10 , 9, 7}, 3) ==>  return (720) //take the three (size) highest nubmers and multiply them
// P 
//   We need to sort the numbers array in the descending order so its easier to get the elements out of it.
//   then we can slice the sorted array and put all the numbers in there.
//   the we reduce the new array with multiplication



// numbers = numbers.sort((a,b)=>b-a).slice(0,size).reduce((a,b)=>a*b)
//   let newArr = numbers.slice(0,size).reduce((a,b)=>a*b)
//   return newArr