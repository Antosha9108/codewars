function swap (string) {
  let array = string.split('').map((element)=>{
    if (element == 'a'|| element == 'e'|| element == 'i'|| element == 'o'|| element == 'u'){
        return element.toUpperCase()
        } else{
          return element
        }
  }).join('')
  return array;
}
// P string
// R  modified string
// E  HelloWorld => HEllOWOrld
// P first we need to split the string into an array
//   we can map through an array and if element is equal a, e, i, o, u we return it uppercased
//   the we can join the array back into string