function isSortedAndHow(array) {
  let ascOrder = array.sort((a,b)=>a-b).join('')
//   console.log(ascOrder)
  let descOrder = array.sort((a,b)=>b-a).join('')
//   console.log(descOrder)
//   return array.join('') === ascOrder ? 'yes, ascending' : array === descOrder ? 'yes, descending' : 'no'

if (str ===ascOrder){
    return 'yes, ascending'
  }else if(str ===descOrder){
    return 'yes, descending'
  } else {
    return 'no'
  }
}


// P array
// R string
// E [1,2] => yes, ascending
// P first we need to sort an array in ascending order in convert it to string
//   then the same thing in descending order
//   and then conditional

console.log(isSortedAndHow([1,2]))