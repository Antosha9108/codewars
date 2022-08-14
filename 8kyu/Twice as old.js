function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
//   P we have two integers: one for dads age one for sons
//   R integer show how many years ago father was twice as old as son
//   E 36,7 =>22 ; 42,21 => 0
//   P first we can double up sons age to get two twice as old number.
//       then we can subtract dads age out of it to get the difference
//           and wrap it up in absolute number to avoid negative return
  
  
  return Math.abs(dadYearsOld - (sonYearsOld*2))
  
  
  
  
}