function absentVowel(x){
let vowels =['a','e','i','o','u']
let stringVowels =  x.split('').filter((element,index,arr) => vowels.includes(element))
let missingVowel = vowels.filter(element => !stringVowels.includes(element))
// return missingVowel
return vowels.indexOf(missingVowel[0])
}