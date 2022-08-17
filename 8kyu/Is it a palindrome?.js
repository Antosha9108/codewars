function isPalindrome(x) {
  x = x.toLowerCase()
  y=x.split("").reverse().join("");
  console.log(y)
  return x == y
}
// P a string
// R boolean
// E aba =>true hello => false
// P first we need to turn the string into lower case to make it not case sesnsitive
//   then we can assign a variable and reverse a string 
//   lastly we need to compare two variables