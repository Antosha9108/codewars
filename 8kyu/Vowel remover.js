function shortcut(string) {
  return string.replace(/[a,e,i,o,u]/g, '');
}




function shortcut(string) {
  let vowels = 'aeiou'
  return string.split('').filter(element => !vowels.includes(element)).join('');
}


// string

// string with vowels filtered out

// hello => hll

// first we need to declare a variable containing the vowels.

// then we split the string into an array and filter out the vowels.

// lastly we join it back into a string