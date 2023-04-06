function isItANum(str) {
  let arr = str.split('')
  let nums ='0987654321'
  let phoneNumber = arr.filter(char => nums.includes(char)).join('')
  return (phoneNumber[0]==='0'&& phoneNumber.length===11)? phoneNumber : "Not a phone number"
  
  
  
  
// your code here;
}
// P a string
// R modified string excluding letters
// E "S:)0207ERGQREG88349F82!efRF)" => "02078834982"
// P first we split the given string into an array.
//   from here we can use a few different methods:
//   1 we can declare a string with number and use includes method on the original string
//   2 we can try to filter/map through original array and see if it converts the Numbers
  
//   lastly we just join the array back into the string.