function last(x){
 return x.split(' ').sort((a,b)=>a.charCodeAt(a.length-1)-b.charCodeAt(b.length-1))
}
// P a string
// R an array sorted by the last ford in the 
// E ('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
// P first we split a string into an array.
      //then we sort it with a.charCodeAt(a.length-1) - b.charcodeAt(b.length-1)
        //.sort method is sorting alphanumerically so getting charCode at works for this one.
//         we are getting a.length-1 to get the last character