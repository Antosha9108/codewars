String.prototype.toAlternatingCase = function () {
 let str ='';
  return this.split('').map((element)=>{
    if (element == element.toLowerCase()){
      return element.toUpperCase()
    } else if (element == element.toUpperCase()){
      return element.toLowerCase()
    }
  }).join('')
  
}

// we can split the string into array and map it with if else conditionals to swap
// the casing
