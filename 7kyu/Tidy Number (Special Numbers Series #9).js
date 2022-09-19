function tidyNumber(n){
  let sortedNum = Number(n.toString().split('').sort().join(''))
  return sortedNum == n ? true : false
}
// P integer
// R bool
// E 12 true ; 102 false
// P we can break the number into array, sort it and join it back
//   after that we can compare new number with given n and return bool