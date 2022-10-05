function tea42(input) {
  input = input.toString().split('')
  for(let i=0;i<input.length; i++){
    if (input[i]=='2'){
      input[i]='t'
    }
  }
  return input.join('')
};