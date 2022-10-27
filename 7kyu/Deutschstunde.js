
function derDieDas(wort){
  
let vowels = [ "a","e","i","o","u",'A','E','I','O','U','ä', 'ö', 'ü']
let vowelCount = wort.split('').filter(char => vowels.includes(char)).length

if (vowelCount <2){
  return `das ${wort}`
} else if (vowelCount <=3){
  return `die ${wort}`
} else if (vowelCount >3) {
  return `der ${wort}`
}

return vowelCount


}

// P string
// R converted string with articles added
// E 'OOOpa' => 'der OOOpa', '4 Vokale -> der OOOpa');
// P  first we declare an array containing vowels for reference
//     then we map through the given string( parameter ) and get the amount of vowels
//     after that we set up a conditional with vowel count and return the string literal with
//       the appropriate article