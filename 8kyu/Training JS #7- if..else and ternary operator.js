function saleHotdogs(n){
  return n<5 ? n*100: n<10 ? n*95: n*90
}
  
 


// P INTEGER
// R INTEGER depending on the n * amount of hotdogs
// E  n<5 hot dog is 100cents     5<n<10 hot dog is 95cents n>=10 hot dog is 90 cents
// P first we need to see how many dogs are are there and determine the price. then we multiple 
//   that number by n(hotdogs)
// if we use ternary operator we put first condition as <5 second condition as <10 and else is *90
//cause it's more than 10