function squareDigits(num){
  //convert number to an array
  var myArr = String(num).split("").map((num)=>{
  return Number(num)
})
//square every number
newArr =myArr.map(item => item*item)
// then concatenate them together.
return Number(newArr.join(''));

}