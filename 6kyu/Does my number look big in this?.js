function narcissistic(value) {
  let length = String(value).length
  let array = String(value).split('')
  return array.map((element)=>Number(element)**length).reduce((acc,c)=>acc+c) ==value
  
  
  
  
//   P an integer
//   R boolean
//   E 7 => true ; 371 => true
//   P first we need to get the length of the value
//     after that we can convert value into string and then split it into array.
//     after that we need to map through element and convert it into nums with Number or parseInt. and **length. 
//     then we reduce it
//     if the output equal value we return true if not false
  
  
}
