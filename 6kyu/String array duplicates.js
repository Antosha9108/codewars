function dup(s) {
return s.map(element=> element.split('').filter((element,index,array)=> element != array[index-1]).join(''))
};





// P an array of strings
// R an array of strings without consecutive duplicate letters
// E dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"]
// P we need to map through the array with a few methods inside.
//   we map through the array. inside the map we split the element into chars. then filter with 
//  (element,index,array)=> element != array[index-1] ( to remove consecutive dups)
// lastly we join the chars back into strings