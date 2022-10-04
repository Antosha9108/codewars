function vowelOne(s){
  // ...
  console.log(s)
  let vowels =['a','e','i','o','u']
  return s.toLowerCase()
    .split('')
    .map((char)=>vowels
    .includes(char) ? '1':'0').join('')
  
  
  
  
  
  
}
// we have a string of letters
// we need to output a string of. 1 s and 0 s

// abc = 100

// first we can declare an array of vowels
// then we split the string into the array
// then we can map through the original array and see if it matches with
//   elements in vowels
//   if yes then push 1 if not push zero
//   then we join the array and return

// forgot to account for different casing so had to add .toLowerCase()