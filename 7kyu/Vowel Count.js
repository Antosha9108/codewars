function getCount(str) {
  let arr = str.split('')
  let vowels =['a','e','i','o','u']
 return arr.filter(element => vowels.includes(element)).length
    }