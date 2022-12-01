function findDeletedNumber(arr, mixArr) {
return arr.filter( n => mixArr.indexOf(n) === -1)[0] || 0
  
  
//   return arr===[] ? [] : arr.reduce((acc,c)=>acc+c)-mixArr.reduce((acc,c)=>acc+c)
}